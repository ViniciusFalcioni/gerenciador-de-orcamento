







import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './Dashboard.css'; // Importando o CSS

import CriarReceita from '../../components/criarReceitas';
import CriarDespesa from '../../components/criarDespesas.tsx';

// Registre as escalas e elementos necessários
Chart.register(CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
    const [totalReceitas, setTotalReceitas] = useState(0);
    const [totalDespesas, setTotalDespesas] = useState(0);
    const [receitas, setReceitas] = useState<any[]>([]);
    const [despesas, setDespesas] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const receitasSnapshot = await getDocs(collection(db, 'receitas'));
                const despesasSnapshot = await getDocs(collection(db, 'despesas'));

                const receitasData = receitasSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...(doc.data() as { descricao: string; valor: number }),
                }));
                const despesasData = despesasSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...(doc.data() as { descricao: string; valor: number }),
                }));

                const totalReceitas = receitasData.reduce((total, data) => total + (data.valor || 0), 0);
                const totalDespesas = despesasData.reduce((total, data) => total + (data.valor || 0), 0);

                setReceitas(receitasData);
                setDespesas(despesasData);
                setTotalReceitas(totalReceitas);
                setTotalDespesas(totalDespesas);
                setLoading(false);
            } catch (err) {
                console.error("Erro ao buscar dados: ", err);
                setError('Ocorreu um erro ao buscar os dados.');
                setLoading(false);
            }
        };

        fetchDados();
    }, []);

    const removerReceita = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'receitas', id));
            setReceitas(prevReceitas => prevReceitas.filter(receita => receita.id !== id));
        } catch (err) {
            console.error('Erro ao remover receita: ', err);
        }
    };

    const removerDespesa = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'despesas', id));
            setDespesas(prevDespesas => prevDespesas.filter(despesa => despesa.id !== id));
        } catch (err) {
            console.error('Erro ao remover despesa: ', err);
        }
    };

    const saldoRestante = totalReceitas - totalDespesas;

    const data = {
        labels: ['Receitas', 'Despesas', 'Saldo Restante'],
        datasets: [
            {
                label: 'Valores',
                data: [totalReceitas, totalDespesas, saldoRestante],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>

            <div className='formStyle'>
                <CriarReceita />
                <CriarDespesa />
            </div>


            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}

            {/* Gráfico com tamanho ajustado */}
            {!loading && !error && (
                <div className="chart-container">
                    <Bar data={data} options={options} />
                </div>
            )}

            {/* Lista de receitas */}
            <div className="list-container">
                <h2 className="section-title">Receitas</h2>
                <ul>
                    {receitas.map((receita, index) => (
                        <li key={index}>
                            {receita.descricao}: R$ {receita.valor}
                            <button className="remove-button" onClick={() => removerReceita(receita.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Lista de despesas */}
            <div className="list-container">
                <h2 className="section-title">Despesas</h2>
                <ul>
                    {despesas.map((despesa, index) => (
                        <li key={index}>
                            {despesa.descricao}: R$ {despesa.valor}
                            <button className="remove-button" onClick={() => removerDespesa(despesa.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
