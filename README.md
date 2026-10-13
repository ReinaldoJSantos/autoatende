# AutoAtende.ai — Landing page

Landing page de apresentação e captação de contatos para um serviço de automação de atendimento e vendas pelo WhatsApp. A página comunica atendimento 24 horas, respostas rápidas e organização de leads, e convida visitantes a falar com um especialista.

## Conteúdo da página

- **Cabeçalho:** identificação AutoAtende.ai e atalho para a área de contato.
- **Apresentação principal:** mensagem sobre não perder clientes no WhatsApp, com destaques de respostas imediatas e segurança dos dados.
- **Formulário de contato:** solicita nome e WhatsApp; a mensagem sobre o negócio é opcional.
- **Benefícios:** apresenta rapidez no atendimento, organização dos leads e direcionamento do contato para o WhatsApp.
- **Rodapé:** identificação da marca e direitos autorais.

## Tecnologias

A página está implementada em um único arquivo HTML, sem etapa de compilação:

- HTML para estrutura e conteúdo;
- [Tailwind CSS](https://tailwindcss.com/) via CDN para layout e estilos;
- fonte Inter via Google Fonts;
- JavaScript no próprio HTML para processar o formulário.

## Fluxo do formulário

Ao enviar o formulário, a página:

1. Lê e remove espaços extras do nome, telefone e mensagem.
2. Envia esses dados em JSON por `POST` para `https://automacao-leads-lblw.onrender.com/lead`.
3. Exibe uma mensagem de status e, após cerca de 1,2 segundo, abre uma conversa no WhatsApp configurado com o texto preenchido.

Se o webhook responder com erro ou a requisição falhar, a página ainda tenta direcionar o visitante para o WhatsApp. Portanto, o redirecionamento não confirma que o lead foi salvo pelo serviço.

## Configuração

Antes de publicar ou reutilizar a página, confira no script ao final de [`landing_page_de_automa_o_inteligente.html`](./landing_page_de_automa_o_inteligente.html):

- `SEU_NUMERO_WHATSAPP`: número de destino no formato internacional, somente dígitos (código do país + DDD + número);
- URL do `fetch`: endereço do webhook responsável por receber os leads.

O webhook precisa aceitar requisições `POST` com corpo JSON contendo `nome`, `telefone` e `mensagem`. Para chamadas feitas de outro domínio, o servidor também precisa permitir CORS.

## Como visualizar

Abra o arquivo [`landing_page_de_automa_o_inteligente.html`](./landing_page_de_automa_o_inteligente.html) diretamente em um navegador. É necessária uma conexão com a internet para carregar o Tailwind CSS e a fonte Inter pelos serviços externos.
# autoatende
