import React from 'react';
import './Home.css'; // Importando o CSS

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
            <h2 className="home-subtitle">Gerencie sua renda e despesas de forma prática e rápida!</h2>
            <p className="home-text">
                Nosso aplicativo foi projetado para tornar o gerenciamento financeiro simples e acessível. Com alguns cliques, você pode controlar suas receitas, despesas e ter uma visão clara do seu saldo disponível.
            </p>
            <ul className="home-features">
                <li>💰 Adicione e acompanhe suas receitas</li>
                <li>📉 Registre suas despesas e mantenha o controle</li>
                <li>📊 Visualize gráficos para entender melhor suas finanças</li>
                <li>🔒 Todos os seus dados são protegidos com segurança</li>
            </ul>
            <p className="home-message">
                Comece agora e tenha uma vida financeira mais saudável e organizada!
            </p>
        </div>
    );
};

export default Home;
