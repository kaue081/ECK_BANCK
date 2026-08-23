'use client';

import { useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import { User, Mail, Phone, Lock, Camera, Save, CreditCard, Bell, QrCode, ArrowRightLeft, Users, CalendarClock, Plus, Trash2 } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Configuracoes() {
    // Estados para todos os campos
    const [foto] = useState("https://i.pravatar.cc/150?img=11");
    const [nome, setNome] = useState("Erick do Nascimento Santana");
    const [cpf, setCpf] = useState("321.654.987-00");
    const [email, setEmail] = useState("erick.n@gmail.com");
    const [telefone, setTelefone] = useState("(81) 98765-4321");
    const [senha, setSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [banco] = useState("2009 - ECK-BANCK");
    const [agencia] = useState("2009");
    const [conta] = useState("2009");
    const [receberEmail, setReceberEmail] = useState(true);
    const [receberSms, setReceberSms] = useState(false);
    
    // Novos estados para Pix e Transferências
    const [chavesPix, setChavesPix] = useState([
        { id: 1, tipo: "CPF", valor: cpf }
    ]);
    const [adicionandoChave, setAdicionandoChave] = useState(false);
    const [novaChaveTipo, setNovaChaveTipo] = useState("Celular");
    const [novaChaveValor, setNovaChaveValor] = useState("");
    const { limitePix, setLimitePix } = useAppContext();

    const handleAdicionarChave = () => {
        if (!novaChaveValor.trim()) {
            toast.error("Digite o valor da chave");
            return;
        }
        setChavesPix([...chavesPix, { id: Date.now(), tipo: novaChaveTipo, valor: novaChaveValor }]);
        setNovaChaveValor('');
        setAdicionandoChave(false);
        toast.success("Nova chave Pix adicionada!");
    };
    
    const handleRemoverChave = (id: number) => {
        setChavesPix(chavesPix.filter(c => c.id !== id));
        toast.info("Chave Pix removida");
    };
    const [salvarContatos, setSalvarContatos] = useState(true);
    const [notificarAgendamentos, setNotificarAgendamentos] = useState(true);
    const maxLimitePix = 10000;

    const handleSalvar = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui seria a chamada para a API
        toast.success("Configurações salvas com sucesso!");
    };

    return (
        <Layout>
            <div className="max-w-4xl mx-auto pb-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Configurações</h1>
                    <p className="text-slate-500 mt-2">Gerencie sua conta e suas preferências</p>
                </div>

                <form onSubmit={handleSalvar} className="space-y-8">
                    
                    {/* Seção: Conta e Perfil */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <User className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-slate-800">Conta e Perfil</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Foto de Perfil */}
                            <div className="flex flex-col items-center space-y-4">
                                <div className="relative">
                                    <img 
                                        src={foto} 
                                        alt="Foto de perfil" 
                                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                    <button 
                                        type="button"
                                        className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
                                        onClick={() => toast.info("Funcionalidade de upload de foto")}
                                    >
                                        <Camera size={16} />
                                    </button>
                                </div>
                                <span className="text-sm font-medium text-slate-600">Alterar Foto</span>
                            </div>

                            {/* Dados Pessoais */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                <div>
                                    <label className="block mb-2 font-medium text-slate-700 text-sm">Nome Completo</label>
                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        className="w-full bg-white/50 border border-white/60 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-slate-700 text-sm">CPF</label>
                                    <input
                                        type="text"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        className="w-full bg-white/50 border border-white/60 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-slate-700 text-sm">E-mail</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white/50 border border-white/60 rounded-xl pl-12 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-slate-700 text-sm">Telefone</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            value={telefone}
                                            onChange={(e) => setTelefone(e.target.value)}
                                            className="w-full bg-white/50 border border-white/60 rounded-xl pl-12 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seção: Segurança */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-slate-800">Segurança</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-medium text-slate-700 text-sm">Senha Atual</label>
                                <input
                                    type="password"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/50 border border-white/60 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-slate-700 text-sm">Nova Senha</label>
                                <input
                                    type="password"
                                    value={novaSenha}
                                    onChange={(e) => setNovaSenha(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/50 border border-white/60 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Seção: Dados Bancários */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CreditCard className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-slate-800">Dados Bancários Vinculados</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block mb-2 font-medium text-slate-700 text-sm">Banco</label>
                                <input
                                    type="text"
                                    value={banco}
                                    disabled
                                    className="w-full bg-slate-100/50 border border-white/60 rounded-xl px-4 py-2.5 text-slate-600 opacity-80 cursor-not-allowed shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-slate-700 text-sm">Agência</label>
                                <input
                                    type="text"
                                    value={agencia}
                                    disabled
                                    className="w-full bg-slate-100/50 border border-white/60 rounded-xl px-4 py-2.5 text-slate-600 opacity-80 cursor-not-allowed shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-slate-700 text-sm">Conta</label>
                                <input
                                    type="text"
                                    value={conta}
                                    disabled
                                    className="w-full bg-slate-100/50 border border-white/60 rounded-xl px-4 py-2.5 text-slate-600 opacity-80 cursor-not-allowed shadow-sm"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Seção: Pix e Transferências */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <ArrowRightLeft className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-slate-800">Pix e Transferências</h2>
                        </div>
                        
                        <div className="space-y-8">
                            {/* Chaves Pix */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm">
                                        <QrCode size={18} /> Minhas Chaves Pix
                                    </h3>
                                    <button 
                                        type="button"
                                        onClick={() => setAdicionandoChave(!adicionandoChave)}
                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                                    >
                                        <Plus size={16} /> Nova Chave
                                    </button>
                                </div>
                                
                                <div className="space-y-3">
                                    {chavesPix.map(chave => (
                                        <div key={chave.id} className="flex justify-between items-center bg-white/50 border border-white/60 rounded-xl px-4 py-3 shadow-sm">
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">{chave.tipo}</p>
                                                <p className="text-slate-800">{chave.valor}</p>
                                            </div>
                                            <button 
                                                type="button" 
                                                onClick={() => handleRemoverChave(chave.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors p-2"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                    {chavesPix.length === 0 && (
                                        <p className="text-slate-500 text-sm italic">Nenhuma chave cadastrada.</p>
                                    )}
                                </div>

                                {adicionandoChave && (
                                    <div className="mt-4 bg-white/60 p-4 rounded-xl border border-blue-100 shadow-sm animate-in fade-in slide-in-from-top-2">
                                        <h4 className="font-medium text-slate-700 mb-3 text-sm">Adicionar nova chave</h4>
                                        <div className="flex flex-col md:flex-row gap-3">
                                            <select 
                                                value={novaChaveTipo}
                                                onChange={(e) => setNovaChaveTipo(e.target.value)}
                                                className="bg-white border border-white/80 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-slate-700"
                                            >
                                                <option value="Celular">Celular</option>
                                                <option value="E-mail">E-mail</option>
                                                <option value="CPF/CNPJ">CPF/CNPJ</option>
                                                <option value="Chave Aleatória">Chave Aleatória</option>
                                            </select>
                                            <input 
                                                type="text"
                                                value={novaChaveValor}
                                                onChange={(e) => setNovaChaveValor(e.target.value)}
                                                placeholder="Digite a chave..."
                                                className="flex-1 bg-white border border-white/80 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-slate-800"
                                            />
                                            <button 
                                                type="button"
                                                onClick={handleAdicionarChave}
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                            >
                                                Adicionar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            {/* Ajuste de Limite Pix */}
                            <div className="border-t border-white/50 pt-6">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-sm">Limite de Transferência Diário</h3>
                                        <p className="text-xs text-slate-500">Ajuste o limite para envios por Pix</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-bold text-blue-600">R$ {limitePix.toLocaleString('pt-BR')}</span>
                                        <p className="text-[10px] text-slate-400">Máx. R$ {maxLimitePix.toLocaleString('pt-BR')}</p>
                                    </div>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max={maxLimitePix} 
                                    step="100"
                                    value={limitePix}
                                    onChange={(e) => setLimitePix(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            {/* Contatos Frequentes e Agendamentos */}
                            <div className="border-t border-white/50 pt-6 grid grid-cols-1 gap-6">
                                <label className="flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <Users size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 text-sm">Salvar Contatos Frequentes</h4>
                                            <p className="text-xs text-slate-500">Salvar automaticamente contatos de transferências recentes</p>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input 
                                            type="checkbox" 
                                            checked={salvarContatos}
                                            onChange={(e) => setSalvarContatos(e.target.checked)}
                                            className="sr-only"
                                        />
                                        <div className={`block w-12 h-6 rounded-full transition-colors ${salvarContatos ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                                        <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${salvarContatos ? 'transform translate-x-6' : ''}`}></div>
                                    </div>
                                </label>

                                <label className="flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <CalendarClock size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 text-sm">Notificar sobre Agendamentos</h4>
                                            <p className="text-xs text-slate-500">Receber avisos 1 dia antes da transferência agendada</p>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input 
                                            type="checkbox" 
                                            checked={notificarAgendamentos}
                                            onChange={(e) => setNotificarAgendamentos(e.target.checked)}
                                            className="sr-only"
                                        />
                                        <div className={`block w-12 h-6 rounded-full transition-colors ${notificarAgendamentos ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                                        <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${notificarAgendamentos ? 'transform translate-x-6' : ''}`}></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Seção: Comunicação */}
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Bell className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-slate-800">Preferências de Comunicação</h2>
                        </div>
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <div className="relative">
                                    <input 
                                        type="checkbox" 
                                        checked={receberEmail}
                                        onChange={(e) => setReceberEmail(e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`block w-12 h-6 rounded-full transition-colors ${receberEmail ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                                    <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${receberEmail ? 'transform translate-x-6' : ''}`}></div>
                                </div>
                                <span className="text-slate-700 font-medium">Receber notificações por E-mail</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <div className="relative">
                                    <input 
                                        type="checkbox" 
                                        checked={receberSms}
                                        onChange={(e) => setReceberSms(e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`block w-12 h-6 rounded-full transition-colors ${receberSms ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                                    <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${receberSms ? 'transform translate-x-6' : ''}`}></div>
                                </div>
                                <span className="text-slate-700 font-medium">Receber alertas por SMS</span>
                            </label>
                        </div>
                    </div>

                    {/* Botão Salvar */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-all shadow-md shadow-blue-500/20"
                        >
                            <Save size={20} />
                            Salvar Alterações
                        </button>
                    </div>

                </form>
            </div>
        </Layout>
    );
}