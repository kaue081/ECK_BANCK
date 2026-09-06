interface Sessao{
    conta: string;
    token: string;
    autenticadoEm: string;
}

const CHAVE_SESSAO = "minha_sessao_chave";

export default function criarSessao(conta: string){
    // Nunca salve senhas no storage. Em vez disso, geramos um token simulado.
    const tokenSimulado = btoa(`token-${conta}-${Date.now()}`);
    
    const sessao: Sessao = {
        conta,
        token: tokenSimulado, 
        autenticadoEm: new Date().toISOString()
    }
    
    // Convertendo para base64 para ofuscar os dados básicos (num app real isso seria criptografado ou viria apenas um token opaco do backend)
    const sessaoOfuscada = btoa(JSON.stringify(sessao));
    
    localStorage.setItem(CHAVE_SESSAO, sessaoOfuscada);
    sessionStorage.setItem(CHAVE_SESSAO, sessaoOfuscada);
}

export function lerSessao(): Sessao | null {
    try {
        const sessaoOfuscada = localStorage.getItem(CHAVE_SESSAO) || sessionStorage.getItem(CHAVE_SESSAO);
        if (!sessaoOfuscada) return null;
        return JSON.parse(atob(sessaoOfuscada));
    } catch {
        return null;
    }
}

export function removerSessao(){
    localStorage.removeItem(CHAVE_SESSAO);
    sessionStorage.removeItem(CHAVE_SESSAO);
}