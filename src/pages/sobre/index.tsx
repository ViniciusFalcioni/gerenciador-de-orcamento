import React from 'react';
import './Sobre.css'; // Importando o CSS

const Sobre = () => {
    return (
        <div className="sobre-container">
            <h1 className="sobre-title">Sobre o Projeto</h1>
            <p className="sobre-text">
                Este site foi criado por Vinicius para facilitar o gerenciamento de finanças pessoais. O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:
            </p>
            <ul className="sobre-list">
                <li><strong>React:</strong> Biblioteca JavaScript utilizada para construir uma interface de usuário modular e reativa.</li>
                <li><strong>React Router:</strong> Implementado para gerenciar a navegação entre as páginas do aplicativo, como Home, Dashboard, Login e Sobre.</li>
                <li><strong>Firebase:</strong> Usado como backend para armazenar receitas e despesas no Firestore, além de fornecer autenticação para login.</li>
                <li><strong>Firestore:</strong> Banco de dados NoSQL do Firebase, utilizado para armazenar e recuperar os dados de receitas e despesas.</li>
                <li><strong>Chart.js:</strong> Biblioteca usada para renderizar gráficos no Dashboard, exibindo as somatórias de receitas, despesas e o saldo restante.</li>
                <li><strong>CSS:</strong> Utilizado para estilizar o layout e os componentes da aplicação, garantindo uma interface agradável e responsiva.</li>
                <li><strong>Firebase Hosting:</strong> Serviço usado para hospedar a aplicação, garantindo que ela esteja disponível online com desempenho otimizado.</li>
            </ul>
            <p className="sobre-text">
                O objetivo deste projeto é proporcionar uma maneira simples e eficaz de gerenciar receitas e despesas pessoais, com uma interface intuitiva e ferramentas que ajudam a visualizar o orçamento mensal.
            </p>
        </div>
    );
};

export default Sobre;
