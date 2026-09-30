# Produtos-Supabse

Uma API simples, criada com Node.js, Express e Supabase, para consultar e cadastrar produtos. Cada produto possui, em geral, os campos `name` (nome) e `price` (preço).

> **Aviso:** este é um projeto de estudos. Sou iniciante na área de desenvolvimento e o código foi criado para praticar conceitos de API REST, banco de dados, variáveis de ambiente e autenticação com token. Sugestões e melhorias são bem-vindas.

## O que a API faz

- Lista os produtos gravados na tabela `produtos` do Supabase.
- Cadastra um produto novo na mesma tabela.
- Exige um token JWT para o cadastro de produtos.
- Mantém dados sensíveis, como chaves do Supabase e a chave do token, em um arquivo `.env` que não é enviado ao GitHub.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Supabase](https://supabase.com/) como banco de dados
- [dotenv](https://www.npmjs.com/package/dotenv) para ler variáveis de ambiente
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para criar e validar tokens JWT

## Estrutura do projeto

| Arquivo | Responsabilidade |
| --- | --- |
| `serve.js` | Inicia o servidor Express, ativa o JSON no corpo das requisições e registra a rota `/Produtos`. |
| `Router.js` | Define as rotas `GET` e `POST` da API. |
| `Controller.js` | Recebe a requisição HTTP, chama a camada de serviço e monta a resposta. |
| `Sevice.js` | Faz as consultas e inserções na tabela `produtos` do Supabase. |
| `Supa.js` | Cria e exporta a conexão com o Supabase usando as variáveis do `.env`. |
| `Autenticacion.js` | Gera o token JWT e verifica o token enviado para cadastrar produtos. |
| `.env` | Guarda configurações e segredos locais. Não deve ser publicado. |

## Como o código funciona

Quando o projeto é iniciado, o arquivo `serve.js` lê a porta configurada no `.env`, cria o servidor Express e libera o uso de JSON nas requisições com `express.json()`.

As rotas ficam no caminho `/Produtos`:

1. Uma requisição `GET /Produtos` vai para `ControllerGET`.
2. O controller chama `ProductsGET`, em `Sevice.js`.
3. O serviço consulta a tabela `produtos` no Supabase com `.select("*")`.
4. Os produtos retornados pelo banco são enviados como resposta JSON.

Para o cadastro:

1. Uma requisição `POST /Produtos` passa primeiro pelo middleware `Autenticar`.
2. O middleware procura o token no cabeçalho `Authorization` e valida esse token com a chave `SECRET`.
3. Se o token for válido, `ControllerPOST` pega `name` e `price` do corpo da requisição.
4. `ProductsPOST` envia esses dados para a tabela `produtos` com `.insert()`.
5. A API responde com sucesso ou com uma mensagem de erro, conforme o resultado da operação.

O token é gerado quando a aplicação inicia e aparece no terminal. Ele expira após uma hora.

## Pré-requisitos

Antes de executar, você precisa ter:

- Node.js instalado.
- Um projeto no Supabase.
- Uma tabela chamada `produtos` configurada no banco. Ela deve ter campos compatíveis com `name` e `price`.

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/Mikhael-devJava/Produtos-Supabse.git
cd Produtos-Supabse
```

Instale as dependências:

```bash
npm install
```

## Executando a API

Inicie o servidor com:

```bash
node serve.js
```

O terminal exibirá a URL da API e o token JWT gerado. Com o exemplo de porta acima, a URL será:

```text
http://localhost:3000/Produtos/
```

## Endpoints

### Listar produtos

```http
GET /Produtos
```

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Teclado",
    "price": 120
  }
]
```

### Cadastrar um produto

```http
POST /Produtos
Authorization: Bearer SEU_TOKEN
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "name": "Mouse",
  "price": 80
}
```

Use o token exibido pelo terminal ao iniciar a API no lugar de `SEU_TOKEN`.

## Possíveis melhorias futuras

- Criar rotas para atualizar e excluir produtos.
- Validar os dados recebidos antes de salvar no banco.
- Melhorar as mensagens de erro e os códigos de status.
- Adicionar testes automatizados.
- Criar documentação interativa com Swagger/OpenAPI.
- Criar usuários e tokens individuais, em vez de gerar um token fixo ao iniciar a aplicação.

## Autor

Mikhael — desenvolvedor iniciante, estudando e praticando desenvolvimento de APIs.
