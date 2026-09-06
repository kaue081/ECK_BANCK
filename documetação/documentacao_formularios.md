# Documentação dos Formulários - Projeto "Banco"

Esta documentação foi elaborada para atender aos requisitos da disciplina de Programação Web I, detalhando os formulários criados para a simulação do sistema bancário.

---

## 1. Formulário de Login (Autenticação)

*   **Nome do formulário:** Formulário de Acesso à Conta (Login)
*   **Objetivo e funcionalidade:** Autenticar o cliente na plataforma bancária, validando suas credenciais antes de conceder acesso aos dados financeiros e de conta (dashboard).
*   **Principais campos utilizados:** 
    *   `Conta` (Input de texto)
    *   `Senha` (Input de senha, com botão para revelar/esconder os caracteres)
*   **Justificativa para a existência do formulário no sistema:** É um componente crítico para a segurança de qualquer aplicação bancária. Sem este formulário, seria impossível garantir a privacidade, a integridade dos saldos e impedir o acesso não autorizado. Ele resolve o problema primário de identificação e autorização do usuário na aplicação.
*   **Explicação de como o formulário participa do fluxo de funcionamento do banco:** É a porta de entrada da aplicação. Quando o usuário abre o site (rota `/`), ele é interceptado por este formulário. Somente após inserir os dados corretos (ex: conta "2009" e senha "1408"), o formulário aprova a requisição e o redireciona para o painel principal (rota `/conta`), liberando o fluxo do sistema.
*   **Prints dos formulários/tela:**
    *   *(Insira aqui o print da tela inicial de login `page.tsx`)*

---

## 2. Formulário de Configurações e Perfil

*   **Nome do formulário:** Gestão de Configurações e Preferências
*   **Objetivo e funcionalidade:** Permitir que o usuário visualize e atualize suas informações de cadastro (nome, CPF, contatos), altere senhas de acesso, faça a gestão das suas chaves PIX, ajuste o limite diário de transferências e defina preferências de notificação.
*   **Principais campos utilizados:**
    *   `Dados Pessoais:` Nome Completo, CPF, E-mail, Telefone (Inputs de texto)
    *   `Segurança:` Senha Atual, Nova Senha (Inputs de senha)
    *   `PIX e Transferências:` Gerenciamento de Chaves Pix (Select e Input para adicionar novas) e Limite de Transferência Diário (Input range/slider).
    *   `Preferências:` Salvar Contatos Frequentes, Notificar Agendamentos, Receber E-mail/SMS (Inputs tipo checkbox convertidos visualmente em toggles).
*   **Justificativa para a existência do formulário no sistema:** Os dados de um cliente mudam com o tempo. Para um banco, manter contato atualizado (e-mail, telefone) é crucial para avisos de segurança. O gerenciamento de limites PIX e mudança de senha resolvem a necessidade de o cliente ter autonomia e controle sobre o risco de suas transações sem precisar contatar o gerente.
*   **Explicação de como o formulário participa do fluxo de funcionamento do banco:** Ao ser acessado através da barra lateral ou menu, ele consome e exibe os dados atuais do estado da aplicação. As alterações feitas aqui impactam todo o resto do sistema. Por exemplo, ao ajustar o "Limite diário" no *range*, essa informação dita se uma transação PIX na tela de transferências será autorizada ou bloqueada.
*   **Prints dos formulários/tela:**
    *   *(Insira aqui os prints da tela de Configurações `app/configuracoes/page.tsx`)*

---

## 3. Modal de Formulários Transacionais (Simulação PIX e TED)

*   **Nome do formulário:** Fluxo de Transação (PIX / TED)
*   **Objetivo e funcionalidade:** Coletar os dados necessários e guiar o usuário de forma segura, etapa por etapa (wizard), para efetivar uma transferência de fundos simulada.
*   **Principais campos utilizados:**
    *   *Etapa 1 (Destino):* Banco (Select), Agência (Input), Conta, CPF ou Chave PIX (Inputs de texto).
    *   *Etapa 2 (Valor):* Valor da Transferência (Input numérico).
    *   *Etapa 4 (Validação):* Senha de 4 dígitos para autorização final (Input de senha numérico).
*   **Justificativa para a existência do formulário no sistema:** Transações bancárias são processos sensíveis e irreversíveis (como o PIX). Este conjunto de formulários passo-a-passo resolve o problema de usabilidade e segurança: em vez de um formulário gigante onde o usuário pode errar sem perceber, ele preenche uma informação por vez, possui uma tela de confirmação (Etapa 3) e finaliza com uma senha secundária, que confirma o ato (simulando a assinatura eletrônica).
*   **Explicação de como o formulário participa do fluxo de funcionamento do banco (Simulação PIX):** 
    1. O usuário clica em "Enviar PIX". 
    2. O formulário solicita a chave do recebedor (Etapa 1). 
    3. Ele insere o valor desejado (Etapa 2) e o sistema imediatamente valida se o valor não excede o saldo da conta ou o Limite PIX configurado.
    4. Ele revisa um resumo (Etapa 3).
    5. O formulário exige a inserção da senha transacional (Etapa 4) - verificando se é exatamente a exigida pelo sistema (ex: "1408").
    6. Com tudo validado, a submissão reduz o saldo do contexto da aplicação (simulação do débito) e finaliza o fluxo mostrando o comprovante (Etapa 5).
*   **Prints dos formulários/tela:**
    *   *(Insira aqui prints das etapas do modal PIX: 1 - Inserir chave, 2 - Inserir valor, 4 - Inserir senha, em `app/transacoes/page.tsx`)*
