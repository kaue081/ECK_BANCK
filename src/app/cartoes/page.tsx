'use client';

import { useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import { CreditCard, Wifi, Lock, Unlock, Globe, AlertTriangle } from "lucide-react";

export default function Cartoes() {
    const [cartaoVirtual, setCartaoVirtual] = useState(false);
    const [aproximacao, setAproximacao] = useState(true);
    const [bloqueado, setBloqueado] = useState(false);
    const [comprasOnline, setComprasOnline] = useState(true);
    const [limite, setLimite] = useState(2500);
    const maxLimite = 5000;
    
    // Estado para controlar a exibição do modal customizado
    const [modalPerda, setModalPerda] = useState(false);

    const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>, name: string, value: boolean) => {
        setter(!value);
        toast.info(`${name} ${!value ? 'ativado' : 'desativado'}`);
    };

    const handleReportarPerda = () => {
        setModalPerda(true);
    };

    const confirmarPerda = () => {
        setBloqueado(true);
        setModalPerda(false);
        toast.error("Cartão bloqueado por perda/roubo. Um novo será enviado.");
    };

    return (
        <Layout>
            <div className="max-w-5xl mx-auto pb-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Cartões</h1>
                    <p className="text-slate-500 mt-2">Gerencie seus cartões físicos e virtuais</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    
                    {/* Coluna Esquerda: O Cartão */}
                    <div className="flex flex-col items-center">
                        {/* Cartão Ilustrativo */}
                        <div className={`relative w-full max-w-100 aspect-[1.586/1] rounded-2xl p-6 text-white shadow-2xl transition-all duration-500 overflow-hidden ${bloqueado ? 'bg-linear-to-br from-slate-700 to-slate-900 grayscale' : 'bg-linear-to-br from-indigo-900 via-fuchsia-600 to-pink-500'}`}>
                            {/* Efeito de bolinhas ao fundo */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.8) 2px, transparent 3px)', backgroundSize: '20px 20px' }}></div>
                            
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="font-semibold tracking-widest text-sm opacity-90 uppercase">
                                        {cartaoVirtual ? 'Virtual Card' : 'Credit Card'}
                                    </span>
                                    <span className="font-bold italic text-lg leading-tight text-right">
                                        ECK<br/>BANK
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4 mt-6">
                                    <div className="flex justify-between items-center">
                                        {/* Chip */}
                                        <div className="w-12 h-9 bg-yellow-200/90 rounded-md border border-yellow-400/50 flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute w-full h-px bg-yellow-600/30 top-1/3"></div>
                                            <div className="absolute w-full h-px bg-yellow-600/30 bottom-1/3"></div>
                                            <div className="absolute h-full w-px bg-yellow-600/30 left-1/3"></div>
                                            <div className="absolute h-full w-px bg-yellow-600/30 right-1/3"></div>
                                        </div>
                                        <Wifi size={28} className="opacity-80 rotate-90" />
                                    </div>

                                    <div className="font-mono text-2xl tracking-[0.15em] drop-shadow-md">
                                        {cartaoVirtual ? '**** **** **** 8821' : '1234 4568 1234 4568'}
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mt-4">
                                    <span className="font-medium tracking-widest uppercase drop-shadow-md text-sm">
                                        Erick N Santana
                                    </span>
                                    <div className="flex gap-2 items-center text-xs">
                                        <span className="opacity-70 leading-none text-[10px] w-8">VALID<br/>THRU</span>
                                        <span className="font-mono text-lg drop-shadow-md">{cartaoVirtual ? '08/28' : '12/29'}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Overlay de Bloqueio */}
                            {bloqueado && (
                                <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center">
                                    <Lock size={48} className="text-white/80 mb-2" />
                                    <span className="font-bold text-lg uppercase tracking-wider text-white/90">Cartão Bloqueado</span>
                                </div>
                            )}
                        </div>

                        {/* Abas para alternar Físico/Virtual */}
                        <div className="flex bg-white/40 backdrop-blur-md rounded-full p-1 mt-8 w-full max-w-75 shadow-sm border border-white/50">
                            <button 
                                className={`flex-1 py-2 rounded-full font-medium text-sm transition-all ${!cartaoVirtual ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                                onClick={() => setCartaoVirtual(false)}
                            >
                                Cartão Físico
                            </button>
                            <button 
                                className={`flex-1 py-2 rounded-full font-medium text-sm transition-all ${cartaoVirtual ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                                onClick={() => setCartaoVirtual(true)}
                            >
                                Cartão Virtual
                            </button>
                        </div>
                    </div>

                    {/* Coluna Direita: Configurações */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-6 md:p-8 flex flex-col gap-6">
                        
                        {/* Ajuste de Limite */}
                        <div className="border-b border-white/50 pb-6">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                        <CreditCard size={18} className="text-blue-500" />
                                        Limite do Cartão
                                    </h3>
                                    <p className="text-sm text-slate-500">Ajuste o limite disponível para uso</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-bold text-blue-600">R$ {limite.toLocaleString('pt-BR')}</span>
                                    <p className="text-xs text-slate-400">Máx. R$ {maxLimite.toLocaleString('pt-BR')}</p>
                                </div>
                            </div>
                            <input 
                                type="range" 
                                min="0" 
                                max={maxLimite} 
                                step="100"
                                value={limite}
                                onChange={(e) => setLimite(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>

                        {/* Toggles */}
                        <div className="space-y-5">
                            {/* Pagamento por Aproximação */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <Wifi size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 text-sm">Pagamento por aproximação</h4>
                                        <p className="text-xs text-slate-500">Contactless (NFC)</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer"
                                        checked={aproximacao}
                                        onChange={() => handleToggle(setAproximacao, "Aproximação", aproximacao)}
                                        disabled={bloqueado}
                                    />
                                    <div className={`w-11 h-6 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${aproximacao ? 'bg-blue-500 after:translate-x-full after:border-white' : 'bg-slate-300 after:border-slate-300'}`}></div>
                                </label>
                            </div>

                            {/* Compras Online */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 text-sm">Compras Online</h4>
                                        <p className="text-xs text-slate-500">Uso em sites e apps</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer"
                                        checked={comprasOnline}
                                        onChange={() => handleToggle(setComprasOnline, "Compras online", comprasOnline)}
                                        disabled={bloqueado}
                                    />
                                    <div className={`w-11 h-6 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${comprasOnline ? 'bg-blue-500 after:translate-x-full after:border-white' : 'bg-slate-300 after:border-slate-300'}`}></div>
                                </label>
                            </div>

                            {/* Bloqueio Temporário */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${bloqueado ? 'bg-red-100 text-red-600' : 'bg-slate-200 text-slate-600'}`}>
                                        {bloqueado ? <Lock size={20} /> : <Unlock size={20} />}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 text-sm">Bloqueio temporário</h4>
                                        <p className="text-xs text-slate-500">Bloqueia todas as funções</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer"
                                        checked={bloqueado}
                                        onChange={() => {
                                            setBloqueado(!bloqueado);
                                            toast.info(bloqueado ? "Cartão desbloqueado" : "Cartão bloqueado");
                                        }}
                                    />
                                    <div className={`w-11 h-6 peer-focus:outline-none rounded-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${bloqueado ? 'bg-red-500 after:translate-x-full after:border-white' : 'bg-slate-300 after:border-slate-300'}`}></div>
                                </label>
                            </div>
                        </div>

                        {/* Ações de Emergência */}
                        <div className="mt-4 pt-6 border-t border-white/50">
                            <button 
                                onClick={handleReportarPerda}
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/50 hover:bg-red-50 text-red-600 font-medium transition-colors border border-red-200 shadow-sm"
                            >
                                <AlertTriangle size={18} />
                                Cartão perdido ou roubado
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Confirmação Customizado */}
            {modalPerda && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
                    <div className="bg-white/95 backdrop-blur-2xl border border-white/60 rounded-4xl shadow-2xl p-8 max-w-sm w-full animate-in fade-in zoom-in duration-200">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Reportar Perda</h3>
                            <p className="text-slate-600 mb-8 text-sm">
                                Tem certeza que deseja reportar a perda ou roubo do seu cartão? Esta ação irá <strong className="text-red-600">bloqueá-lo permanentemente</strong>.
                            </p>
                            <div className="flex flex-col gap-3 w-full">
                                <button 
                                    onClick={confirmarPerda}
                                    className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-all shadow-md shadow-red-500/20"
                                >
                                    Confirmar Bloqueio
                                </button>
                                <button 
                                    onClick={() => setModalPerda(false)}
                                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}