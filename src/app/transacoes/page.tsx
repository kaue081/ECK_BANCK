'use client';

import { useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import { 
    Send, 
    ArrowRightLeft, 
    Download, 
    CalendarClock, 
    QrCode, 
    Copy, 
    Smartphone,
    Landmark,
    Users,
    Star,
    Clock,
    ShieldCheck,
    CheckCircle2,
    XCircle
} from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Transacoes() {
    const [simulacaoAberta, setSimulacaoAberta] = useState(false);
    const [tipoSimulacao, setTipoSimulacao] = useState("");
    const [step, setStep] = useState(1);
    const [destinatario, setDestinatario] = useState("");
    const [valor, setValor] = useState("");
    const [senhaValidacao, setSenhaValidacao] = useState("");
    
    // Estados simulados de conta
    const { saldo, setSaldo, limitePix, setLimitePix } = useAppContext();

    const iniciarSimulacao = (tipo: string) => {
        setTipoSimulacao(tipo);
        setStep(1);
        setDestinatario("");
        setValor("");
        setSenhaValidacao("");
        setSimulacaoAberta(true);
    };

    return (
        <Layout>
            <div className="max-w-6xl mx-auto pb-10">
                {/* Header da Página */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Transações</h1>
                    <p className="text-slate-500 mt-2">Gerencie suas transferências e acompanhe suas movimentações</p>
                </div>

                {/* Ações Rápidas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    <button onClick={() => iniciarSimulacao('Enviar PIX')} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-5 hover:bg-white/80 transition-all shadow-[0_4px_20px_0_rgba(31,38,135,0.05)] hover:shadow-[0_8px_30px_0_rgba(31,38,135,0.1)] hover:-translate-y-1 text-left flex flex-col group">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Send size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">Enviar PIX</h3>
                        <p className="text-sm text-slate-500 mt-1">Envie dinheiro instantaneamente</p>
                    </button>
                    
                    <button onClick={() => iniciarSimulacao('Transferir TED')} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-5 hover:bg-white/80 transition-all shadow-[0_4px_20px_0_rgba(31,38,135,0.05)] hover:shadow-[0_8px_30px_0_rgba(31,38,135,0.1)] hover:-translate-y-1 text-left flex flex-col group">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <ArrowRightLeft size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">Transferir TED</h3>
                        <p className="text-sm text-slate-500 mt-1">Faça uma transferência bancária</p>
                    </button>
                    
                    <button onClick={() => iniciarSimulacao('Receber PIX')} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-5 hover:bg-white/80 transition-all shadow-[0_4px_20px_0_rgba(31,38,135,0.05)] hover:shadow-[0_8px_30px_0_rgba(31,38,135,0.1)] hover:-translate-y-1 text-left flex flex-col group">
                        <div className="w-12 h-12 bg-fuchsia-100 text-fuchsia-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                            <Download size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">Receber PIX</h3>
                        <p className="text-sm text-slate-500 mt-1">Receba dinheiro através do PIX</p>
                    </button>
                    
                    <button onClick={() => iniciarSimulacao('Agendar transferência')} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-5 hover:bg-white/80 transition-all shadow-[0_4px_20px_0_rgba(31,38,135,0.05)] hover:shadow-[0_8px_30px_0_rgba(31,38,135,0.1)] hover:-translate-y-1 text-left flex flex-col group">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <CalendarClock size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg">Agendar</h3>
                        <p className="text-sm text-slate-500 mt-1">Programe uma transferência</p>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {/* Seção PIX */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <ShieldCheck className="text-teal-500" size={24} />
                                    <h2 className="text-2xl font-bold text-slate-800">PIX</h2>
                                </div>
                                <p className="text-sm text-slate-500">Envie e receba dinheiro de forma rápida e segura.</p>
                            </div>
                            <button onClick={() => iniciarSimulacao('Gerenciar PIX')} className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                                Gerenciar PIX
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 bg-white/50 rounded-2xl border border-white/80">
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Chave PIX</p>
                                <p className="text-sm font-semibold text-slate-700 truncate">exemplo@email.com</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Limite diário</p>
                                <p className="text-sm font-semibold text-slate-700">R$ {limitePix.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Agendados</p>
                                <p className="text-sm font-semibold text-slate-700">2 transferências</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto">
                            <button onClick={() => iniciarSimulacao('PIX por Chave')} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-slate-100 transition-colors text-slate-700 hover:text-indigo-600 group">
                                <Users size={20} className="mb-2 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                <span className="text-xs font-medium text-center">Por chave</span>
                            </button>
                            <button onClick={() => iniciarSimulacao('Leitor de QR Code')} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-slate-100 transition-colors text-slate-700 hover:text-indigo-600 group">
                                <QrCode size={20} className="mb-2 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                <span className="text-xs font-medium text-center">QR Code</span>
                            </button>
                            <button onClick={() => iniciarSimulacao('PIX Copia e Cola')} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-slate-100 transition-colors text-slate-700 hover:text-indigo-600 group">
                                <Copy size={20} className="mb-2 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                <span className="text-xs font-medium text-center">Copia e Cola</span>
                            </button>
                            <button onClick={() => iniciarSimulacao('Receber PIX')} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-slate-100 transition-colors text-slate-700 hover:text-indigo-600 group">
                                <Smartphone size={20} className="mb-2 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                <span className="text-xs font-medium text-center">Receber</span>
                            </button>
                        </div>
                    </div>

                    {/* Seção TED */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Landmark className="text-blue-500" size={24} />
                                    <h2 className="text-2xl font-bold text-slate-800">Transferência TED</h2>
                                </div>
                                <p className="text-sm text-slate-500">Realize transferências para contas de outros bancos.</p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                            <ul className="space-y-4 mb-6 text-sm text-slate-600 font-medium">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Users size={16} /></div>
                                    Beneficiários salvos
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Star size={16} /></div>
                                    Contas favoritas
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Clock size={16} /></div>
                                    Limites e horários
                                </li>
                            </ul>
                        </div>

                        <button onClick={() => iniciarSimulacao('Nova Transferência TED')} className="w-full py-4 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-all shadow-md shadow-blue-500/20 mt-auto">
                            Nova Transferência
                        </button>
                    </div>
                </div>

            </div>

            {simulacaoAberta && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
                    <style>{`
                        @keyframes scan {
                            0% { transform: translateY(0); }
                            50% { transform: translateY(180px); }
                            100% { transform: translateY(0); }
                        }
                    `}</style>
                    <div className="bg-white border border-slate-200 rounded-4xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in duration-200 overflow-hidden flex flex-col">
                        <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-start relative">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">{tipoSimulacao}</h3>
                                <p className="text-sm text-slate-500 mt-1">
                                    {['Receber PIX', 'Leitor de QR Code', 'Gerenciar PIX'].includes(tipoSimulacao) ? "Simulação de recurso" : (
                                        <>
                                            {step === 1 && "Informe os dados"}
                                            {step === 2 && "Qual o valor?"}
                                            {step === 3 && "Confirme os dados"}
                                            {step === 4 && "Validação de segurança"}
                                            {step === 5 && "Comprovante"}
                                        </>
                                    )}
                                </p>
                            </div>
                            <button onClick={() => setSimulacaoAberta(false)} className="text-slate-400 hover:text-slate-700 p-2 bg-white rounded-full shadow-sm">
                                <XCircle size={24} />
                            </button>
                        </div>

                        <div className="p-6 flex-1 min-h-50 flex flex-col justify-center">
                            {step === 1 && (
                                <>
                                    {tipoSimulacao === 'Receber PIX' && (
                                        <div className="flex flex-col items-center py-4 space-y-4">
                                            <div className="p-4 bg-white border-2 border-dashed border-slate-300 rounded-2xl">
                                                <QrCode size={120} className="text-slate-800" />
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium">Mostre este código ou compartilhe o link</p>
                                            <div className="w-full relative">
                                                <input type="text" value="00020126580014br.gov.bcb.pix..." readOnly className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 text-sm outline-none" />
                                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                                    <Copy size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {tipoSimulacao === 'Leitor de QR Code' && (
                                        <div className="flex flex-col items-center justify-center py-4">
                                            <div className="relative w-64 h-64 bg-slate-900 rounded-3xl overflow-hidden flex items-center justify-center border-4 border-slate-800">
                                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,transparent_20%,#000_100%)]"></div>
                                                <div className="w-48 h-48 border-2 border-indigo-500 rounded-xl relative">
                                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500"></div>
                                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-indigo-500"></div>
                                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-indigo-500"></div>
                                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-500"></div>
                                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-indigo-500 shadow-[0_0_8px_#6366f1]" style={{ animation: 'scan 2s linear infinite' }}></div>
                                                </div>
                                            </div>
                                            <p className="text-slate-500 text-sm mt-4">Aponte a câmera para o QR Code</p>
                                        </div>
                                    )}
                                    {(tipoSimulacao === 'Transferir TED' || tipoSimulacao === 'Nova Transferência TED') && (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium text-slate-500 mb-1">Banco</label>
                                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-slate-700">
                                                        <option>Selecione</option>
                                                        <option>Banco Itaú</option>
                                                        <option>Banco Bradesco</option>
                                                        <option>Nubank</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-slate-500 mb-1">Agência</label>
                                                    <input type="text" placeholder="0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-slate-700" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-slate-500 mb-1">Conta com dígito</label>
                                                <input type="text" placeholder="00000-0" value={destinatario} onChange={(e) => setDestinatario(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-slate-700" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-slate-500 mb-1">CPF ou CNPJ</label>
                                                <input type="text" placeholder="000.000.000-00" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-slate-700" />
                                            </div>
                                        </div>
                                    )}
                                    {tipoSimulacao === 'PIX Copia e Cola' && (
                                        <div className="space-y-4">
                                            <label className="block text-sm font-medium text-slate-700">Código PIX Copia e Cola</label>
                                            <textarea 
                                                value={destinatario}
                                                onChange={(e) => setDestinatario(e.target.value)}
                                                placeholder="Cole aqui o código..."
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 text-slate-700 min-h-25 resize-none"
                                                autoFocus
                                            />
                                        </div>
                                    )}
                                    {tipoSimulacao === 'Gerenciar PIX' && (
                                        <div className="space-y-3">
                                            <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-600"><ShieldCheck size={20} /></div>
                                                    <span className="font-semibold text-slate-700">Meus Limites PIX</span>
                                                </div>
                                                <ArrowRightLeft size={16} className="text-slate-400" />
                                            </button>
                                            <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-600"><Users size={20} /></div>
                                                    <span className="font-semibold text-slate-700">Minhas Chaves</span>
                                                </div>
                                                <ArrowRightLeft size={16} className="text-slate-400" />
                                            </button>
                                        </div>
                                    )}
                                    {!['Receber PIX', 'Leitor de QR Code', 'Gerenciar PIX', 'Transferir TED', 'Nova Transferência TED', 'PIX Copia e Cola'].includes(tipoSimulacao) && (
                                        <div className="space-y-4">
                                            <label className="block text-sm font-medium text-slate-700">
                                                {tipoSimulacao === 'Agendar transferência' ? 'Para quem vai agendar?' : 'Chave PIX'}
                                            </label>
                                            <input 
                                                type="text" 
                                                value={destinatario}
                                                onChange={(e) => setDestinatario(e.target.value)}
                                                placeholder="exemplo@email.com, CPF ou Celular"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all text-slate-700"
                                                autoFocus
                                            />
                                            {tipoSimulacao === 'Agendar transferência' && (
                                                <div className="mt-4">
                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Data do Agendamento</label>
                                                    <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 text-slate-700" />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                            {step === 2 && (
                                <div className="space-y-4 text-center">
                                    <label className="block text-sm font-medium text-slate-700">Valor da transferência</label>
                                    <div className="flex items-center justify-center text-4xl font-bold text-slate-800">
                                        <span className="text-2xl mr-2 text-slate-400">R$</span>
                                        <input 
                                            type="number" 
                                            value={valor}
                                            onChange={(e) => setValor(e.target.value)}
                                            placeholder="0,00"
                                            className="w-full bg-transparent outline-none text-center"
                                            autoFocus
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium bg-slate-100 py-1.5 px-3 rounded-lg inline-block">
                                        Saldo disponível: R$ {saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                </div>
                            )}
                            {step === 3 && (
                                <div className="space-y-4">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500 text-sm">Destinatário</span>
                                            <span className="font-semibold text-slate-800 text-sm">{destinatario || 'Não informado'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500 text-sm">Valor</span>
                                            <span className="font-semibold text-slate-800 text-sm">R$ {parseFloat(valor || '0').toFixed(2).replace('.', ',')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500 text-sm">Data</span>
                                            <span className="font-semibold text-slate-800 text-sm">Hoje</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {step === 4 && (
                                <div className="space-y-4 text-center">
                                    <div className="w-16 h-16 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <label className="block text-sm font-medium text-slate-700">Digite sua senha de 4 dígitos</label>
                                    <input 
                                        type="password" 
                                        maxLength={4}
                                        value={senhaValidacao}
                                        onChange={(e) => setSenhaValidacao(e.target.value.replace(/\D/g, ''))} // Apenas números
                                        placeholder="****"
                                        className="w-full text-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all text-slate-700 font-bold tracking-[0.5em] text-xl"
                                        autoFocus
                                    />
                                </div>
                            )}
                            {step === 5 && (
                                <div className="flex flex-col items-center justify-center py-2">
                                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Concluído!</h3>
                                    <p className="text-slate-500 text-center mb-6">Operação realizada com sucesso.</p>
                                </div>
                            )}
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4 mt-auto">
                            {['Receber PIX', 'Leitor de QR Code', 'Gerenciar PIX'].includes(tipoSimulacao) ? (
                                <button onClick={() => setSimulacaoAberta(false)} className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                                    Fechar
                                </button>
                            ) : (
                                <>
                                    {step > 1 && step < 5 && (
                                        <button onClick={() => setStep(step - 1)} className="flex-1 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold transition-colors">
                                            Voltar
                                        </button>
                                    )}
                                    {step < 3 && (
                                        <button 
                                            onClick={() => {
                                                if (step === 2) {
                                                    const numValor = parseFloat(valor || '0');
                                                    const isPix = tipoSimulacao.includes('PIX') || tipoSimulacao === 'Enviar PIX';
                                                    
                                                    if (numValor <= 0) {
                                                        toast.error("Insira um valor válido.");
                                                        return;
                                                    }
                                                    if (numValor > saldo) {
                                                        toast.error("Saldo insuficiente para esta transação.");
                                                        return;
                                                    }
                                                    if (numValor > limitePix) {
                                                        toast.error(`Valor excede seu limite de transferência diário de R$ ${limitePix.toLocaleString('pt-BR', {minimumFractionDigits: 2})}.`);
                                                        return;
                                                    }
                                                }
                                                setStep(step + 1);
                                            }} 
                                            disabled={(step === 1 && !destinatario && !['Transferir TED', 'Nova Transferência TED'].includes(tipoSimulacao)) || (step === 2 && !valor)}
                                            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold transition-colors"
                                        >
                                            Continuar
                                        </button>
                                    )}
                                    {step === 3 && (
                                        <button 
                                            onClick={() => setStep(4)} 
                                            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                                        >
                                            Confirmar
                                        </button>
                                    )}
                                    {step === 4 && (
                                        <button 
                                            onClick={() => {
                                                if (senhaValidacao.length < 4) {
                                                    toast.warning("Faltam números! A senha precisa ter 4 dígitos.");
                                                    return;
                                                }
                                                
                                                if (senhaValidacao === "1408") {
                                                    const numValor = parseFloat(valor || '0');
                                                    
                                                    // Atualiza os saldos simulados
                                                    setSaldo(prev => prev - numValor);
                                                    setLimitePix(prev => prev - numValor);
                                                    
                                                    toast.success("Transação concluída com sucesso!");
                                                    setStep(5);
                                                } else {
                                                    toast.error("Senha incorreta! Tente novamente.");
                                                }
                                            }} 
                                            disabled={senhaValidacao.length === 0}
                                            className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold transition-colors shadow-sm shadow-emerald-600/20"
                                        >
                                            Validar e Enviar
                                        </button>
                                    )}
                                    {step === 5 && (
                                        <button 
                                            onClick={() => setSimulacaoAberta(false)} 
                                            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                                        >
                                            Fechar
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </Layout>
    );
}