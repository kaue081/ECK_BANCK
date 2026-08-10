'use client';

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Swal from "sweetalert2";

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
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "existem dados vazios",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (CONTA_FIXA !== conta || SENHA_FIXA !== senhaDigitada) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "existem dados invalidos",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={Autenticar} className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-slate-800">
            Banco Charles
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
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
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
                className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
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
              className="w-1/2 py-3 rounded-lg bg-slate-200 hover:bg-slate-300 font-medium text-slate-700 transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="w-1/2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
