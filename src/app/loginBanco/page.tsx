

export default function LoginBanco(){
    return(
       <div>
         <div>
            <form>
                <h2>Banco Charles</h2>
                <div>
                    <label htmlFor="Conta" >Conta</label>
                    <input className="border-2" type="texto"/> 
                </div>
                <div>
                    <label htmlFor="Senha" >Conta</label>
                    <input className="border-2" type="password"/> 
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