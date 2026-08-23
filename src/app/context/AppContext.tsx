'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type AppContextType = {
    limitePix: number;
    setLimitePix: (val: number | ((prev: number) => number)) => void;
    saldo: number;
    setSaldo: (val: number | ((prev: number) => number)) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    // Definimos o limite inicial como 5000, para ficar coerente com a transação
    const [limitePix, setLimitePixState] = useState(5000);
    const [saldo, setSaldoState] = useState(12500.50);

    // Tenta carregar do localStorage quando o componente for montado no lado do cliente
    useEffect(() => {
        const savedLimite = localStorage.getItem('limitePix');
        if (savedLimite) {
            setLimitePixState(Number(savedLimite));
        }
        const savedSaldo = localStorage.getItem('saldo');
        if (savedSaldo) {
            setSaldoState(Number(savedSaldo));
        }
    }, []);

    // Atualiza o estado e o localStorage
    const setLimitePix = (val: number | ((prev: number) => number)) => {
        setLimitePixState(prev => {
            const nextVal = typeof val === 'function' ? val(prev) : val;
            localStorage.setItem('limitePix', nextVal.toString());
            return nextVal;
        });
    };

    const setSaldo = (val: number | ((prev: number) => number)) => {
        setSaldoState(prev => {
            const nextVal = typeof val === 'function' ? val(prev) : val;
            localStorage.setItem('saldo', nextVal.toString());
            return nextVal;
        });
    };

    return (
        <AppContext.Provider value={{ limitePix, setLimitePix, saldo, setSaldo }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}
