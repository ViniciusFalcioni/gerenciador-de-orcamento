import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './CriarReceita.css'; // Importando o CSS

const CriarReceita = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'receitas'), {
        descricao,
        valor,
        data: new Date()
      });
      setDescricao('');
      setValor(0);
      alert('Receita adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar receita: ', error);
      alert('Erro ao adicionar receita.');
    }
  };

  return (
    <div className="criar-receita-container">
      <h1>Adicionar Receita</h1>
      <input
        type="text"
        placeholder="Descrição da receita"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor da receita"
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Adicionar Receita</button>
    </div>
  );
};

export default CriarReceita;
