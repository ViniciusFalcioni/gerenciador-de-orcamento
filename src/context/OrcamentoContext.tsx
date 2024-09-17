import React, { createContext, useState, ReactNode } from 'react';

// Defina os tipos de Receita e Despesa
interface Receita {
    id: number;
    descricao: string;
    valor: number;
}

interface Despesa {
    id: number;
    descricao: string;
    valor: number;
}

// Defina o tipo do contexto
interface OrcamentoContextProps {
    receitas: Receita[];
    despesas: Despesa[];
    adicionarReceita: (descricao: string, valor: number) => void;
    adicionarDespesa: (descricao: string, valor: number) => void;
}

// Crie o contexto
const OrcamentoContext = createContext<OrcamentoContextProps | undefined>(undefined);

// Provedor do contexto
const OrcamentoProvider = ({ children }: { children: ReactNode }) => {
    const [receitas, setReceitas] = useState<Receita[]>([]);
    const [despesas, setDespesas] = useState<Despesa[]>([]);

    const adicionarReceita = (descricao: string, valor: number) => {
        const novaReceita: Receita = { id: receitas.length + 1, descricao, valor };
        setReceitas([...receitas, novaReceita]);
    };

    const adicionarDespesa = (descricao: string, valor: number) => {
        const novaDespesa: Despesa = { id: despesas.length + 1, descricao, valor };
        setDespesas([...despesas, novaDespesa]);
    };

    return (
        <OrcamentoContext.Provider value={{ receitas, despesas, adicionarReceita, adicionarDespesa }}>
            {children}
        </OrcamentoContext.Provider>
    );
};

export { OrcamentoContext, OrcamentoProvider };
