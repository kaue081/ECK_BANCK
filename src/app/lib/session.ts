interface Sessao{
    conta: String;
    senha: String;
    autenticadoEm: String;
}

const CHAVE_SESSAO = "minha_sessao_chave";

export default function criarSessao(conta:string, senha:string){
    const sessao: Sessao = {
        conta,
        senha, 
        autenticadoEm: new Date().toISOString()
    }
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(sessao));
}