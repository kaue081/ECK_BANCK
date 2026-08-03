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

    return(
       <div>
         <div>
            <form onSubmit={Autenticar}>
                <h2>Banco Charles</h2>
                <div>
                    <label htmlFor="Conta" >Conta</label>
                    <input className="border-2" type="texto" name="conta"/> 
                </div>
                <div>
                    <label htmlFor="Senha" >Senha</label>
                    <input className="border-2" type="password" name="senha"/> 
                </div>
                 <div>
                    <button type="reset">Cancelar</button>
                    <button type="submit">Entrar</button>
                </div>
            </form> 
         </div>
       </div>
    );
}