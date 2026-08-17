'use client';

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

export default function LoginBanco() {
  const CONTA_FIXA = "2009";
  const SENHA_FIXA = "1408";
  const router = useRouter();
  const [senha, setSenha] = useState(false);

  function Autenticar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const conta = String(formData.get("conta") ?? "").trim();
    const senhaDigitada = String(formData.get("senha") ?? "");

    if (!conta || !senhaDigitada) {
      toast.error("existem dados vazios");
      return;
    }

    if (CONTA_FIXA !== conta || SENHA_FIXA !== senhaDigitada) {
      toast.error("existem dados invalidos");
      return;
    }

    router.push("/conta");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8">
        <form onSubmit={Autenticar} className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-slate-800">
            ECK-BANK
          </h2>

          {/* Conta */}
          <div>
            <label htmlFor="conta" className="block mb-2 font-medium text-slate-700">
              Conta
            </label>
            <input
              id="conta"
              name="conta"
              type="text"
              placeholder="Digite sua conta"
              className="w-full bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/80 transition-all text-slate-800 shadow-sm"
            />
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="senha" className="block mb-2 font-medium text-slate-700">
              Senha
            </label>
            <div className="relative">
              <input
                id="senha"
                name="senha"
                type={senha ? "text" : "password"}
                placeholder="Digite sua senha"
                className="w-full bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/80 transition-all text-slate-800 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setSenha(!senha)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"

              >
                {senha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-4">
            <button
              type="reset"
              className="w-1/2 py-3 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/50 font-medium text-slate-700 transition-all shadow-sm"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-all shadow-md shadow-blue-500/20"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
