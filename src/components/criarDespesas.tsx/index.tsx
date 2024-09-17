import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './CriarDespesa.css'; // Importando o CSS

const CriarDespesa = () => {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState(0);

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, 'despesas'), {
                descricao,
                valor,
                data: new Date()
            });
            setDescricao('');
            setValor(0);
            alert('Despesa adicionada com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar despesa: ', error);
            alert('Erro ao adicionar despesa.');
        }
    };

    return (
        <div className="criar-despesa-container">
            <h1>Adicionar Despesa</h1>
            <input
                type="text"
                placeholder="Descrição da despesa"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            <input
                type="number"
                placeholder="Valor da despesa"
                value={valor}
                onChange={(e) => setValor(Number(e.target.value))}
            />
            <button onClick={handleSubmit}>Adicionar Despesa</button>
        </div>
    );
};

export default CriarDespesa;
