'use client';

import { useRouter } from "next/navigation";
import { SubmitEvent } from "react";


export default function LoginBanco(){

    const CONTA_FIXA = "2009";
    const SENHA_FIXA = "1408";
    const router = useRouter();
    
    function Autenticar(event: SubmitEvent<HTMLFormElement>){
       event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const conta= String(formData.get("conta") ?? "").trim();
        const senha= String(formData.get("senha") ?? "");

        if(!conta || !senha){
            alert('existem dados vazios')
            return;
        }
        
        if(CONTA_FIXA !== conta || SENHA_FIXA !== senha){
            alert("existem dados invalidos")
            return;
        
        }
        
        router.push("/dashboard")

    }                                                           

    return (
  <main className="min-h-screen bg-slate-100 flex items-center justify-center">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

      <form onSubmit={Autenticar} className="space-y-6">

        <h2 className="text-3xl font-bold text-center text-slate-800">
          Banco Charles
        </h2>

        {/* Conta */}
        <div>
          <label htmlFor="conta" className="block mb-2 font-medium">
            Conta
          </label>

          <input
            id="conta"
            name="conta"
            type="text"
            placeholder="Digite sua conta"
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        {/* Senha */}
        <div>
          <label htmlFor="senha" className="block mb-2 font-medium">
            Senha
          </label>

          <input
            id="senha"
            name="senha"
            type="password"
            placeholder="Digite sua senha"
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        {/* Botões */}
        <div className="flex gap-4">

          <button
            type="reset"
            className="
              w-1/2
              py-3
              rounded-lg
              bg-slate-200
              hover:bg-slate-300
            "
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="
              w-1/2
              py-3
              rounded-lg
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
            "
          >
            Entrar
          </button>

        </div>

      </form>

    </div>

  </main>
);
}
