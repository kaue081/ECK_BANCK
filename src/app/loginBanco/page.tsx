'usw client';

import { useRouter } from "next/navigation";
import { SubmitEvent } from "react";


export default function LoginBanco(){

    const CONTA_FIXA = "2009";
    const SENHA_FIXA = "1408";
    
    function Autenticar(event: SubmitEvent<HTMLFormElement>){
        const formData = new FormData(event.currentTarget);
        const conta= String(FormData.get("conta") ?? "").trim();
        const senha= String(FormData.get("senha") ?? "");

        if(!conta || !senha){
            alert('existem dados vazios')
            return;
        }
        
        if(CONTA_FIXA !== conta || SENHA_FIXA !== senha){
            alert("existem dados invalidos")
            return;
        
        }
        
        reuter.push("/rota")

    }

    return(
       <div>
         <div>
            <form>
                <h2>Banco Charles</h2>
                <div>
                    <label htmlFor="Conta" >Conta</label>
                    <input className="border-2" type="texto" name="conta"/> 
                </div>
                <div>
                    <label htmlFor="Senha" >Conta</label>
                    <input className="border-2" type="password" name="senha"/> 
                </div>
                 <div>
                    <button>Entrar</button>
                    <button>cancelar</button>
                </div>
            </form>
         </div>
       </div>
    );
}