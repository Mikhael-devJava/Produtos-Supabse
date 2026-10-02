# Produtos-Supabse

API REST para consultar, cadastrar e atualizar produtos em uma tabela do Supabase. O projeto usa Node.js, Express e autenticação JWT nas rotas de escrita.

## Funcionalidades

- Consulta os registros da tabela `produtos`.
- Cadastra produtos com `name` e `price`.
- Atualiza um produto existente pelo `id`.
- Protege as operações de cadastro e atualização com um token JWT válido por uma hora.
- Lê as credenciais e configurações a partir de variáveis de ambiente.

## Tecnologias

<p align="left">
  <a href="https://nodejs.org/" title="Node.js"><img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" height="40"></a>
  <a href="https://expressjs.com/" title="Express"><img src="https://cdn.simpleicons.org/express/000000" alt="Express" height="40"></a>
  <a href="https://supabase.com/" title="Supabase"><img src="https://cdn.simpleicons.org/supabase/3FCF8E" alt="Supabase" height="40"></a>
  <a href="https://www.npmjs.com/package/dotenv" title="dotenv"><img src="https://cdn.simpleicons.org/dotenv/ECD53F" alt="dotenv" height="40"></a>
  <a href="https://www.npmjs.com/package/jsonwebtoken" title="jsonwebtoken"><img src="https://cdn.simpleicons.org/jsonwebtokens/000000" alt="jsonwebtoken" height="40"></a>
</p>

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Supabase](https://supabase.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
## Requisitos

- Node.js instalado.
- Um projeto Supabase e uma tabela chamada `produtos`.
- As colunas `name` e `price` na tabela. Uma coluna `id` gerada pelo banco pode ser usada para identificar cada registro.

## Configuração

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Mikhael-devJava/Produtos-Supabse.git
cd Produtos-Supabse
npm install
```

Crie o arquivo `src/.env` com as configurações do seu ambiente:

```env
PORT=3000
SupaURL=https://SEU-PROJETO.supabase.co
SupaKEY=SUA_CHAVE_SUPABASE
SECRET=UMA_CHAVE_SECRETA_PARA_JWT
```

Use uma chave apropriada para o seu projeto Supabase e mantenha `src/.env` e seus segredos fora do repositório. Não publique chaves privadas nem tokens.

## Executar

Na pasta raiz do projeto, inicie a API:

```bash
node src/serve.js
```

O terminal informa a URL local da API e imprime o token JWT criado na inicialização. Esse token expira em uma hora.

A URL padrão, usando `PORT=3000`, é:

```text
http://localhost:3000/Produtos
```

## Endpoints

### Listar produtos

`GET /Produtos`

Não exige token. Exemplo com cURL:

```bash
curl http://localhost:3000/Produtos
```

A resposta é uma lista JSON dos registros retornados pela tabela `produtos`, por exemplo:

```json
[
  {
    "id": 1,
    "name": "Teclado",
    "price": 120
  }
]
```

### Cadastrar produto

`POST /Produtos`

Exige o token JWT mostrado no terminal ao iniciar a API. Envie-o no cabeçalho `Authorization` como `Bearer <token>` e forneça `name` e `price` no corpo JSON:

```bash
curl -X POST http://localhost:3000/Produtos \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Mouse","price":80}'
```

### Atualizar produto

`PUT /Produtos`

Exige o token JWT mostrado no terminal ao iniciar a API. Envie o identificador do produto e os valores de `name` e `price` no corpo JSON:

```bash
curl -X PUT http://localhost:3000/Produtos \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"id":1,"name":"Teclado mecânico","price":250}'
```

A API usa `id` para localizar o registro na tabela `produtos` e atualiza seus campos `name` e `price`.
## Organização do código

| Arquivo | Responsabilidade |
| --- | --- |
| `src/serve.js` | Configura e inicia o servidor Express. |
| `src/Router.js` | Registra as rotas da API. |
| `src/Controller.js` | Trata as requisições e prepara as respostas. |
| `src/Sevice.js` | Consulta, insere e atualiza registros na tabela `produtos`. |
| `src/Supa.js` | Cria o cliente do Supabase a partir das variáveis de ambiente. |
| `src/Autenticacion.js` | Gera e valida tokens JWT. |
| `src/.env` | Configuração local; não deve ser commitado. |

## Escopo

Este projeto é de estudo e demonstra uma integração básica entre uma API Express e o Supabase. Atualmente, oferece consulta, cadastro e atualização; ainda não inclui uma rota para excluir produtos.

## Autoria

O código-fonte foi **100% escrito à mão pelo autor**. Os arquivos `README.md` foram produzidos com auxílio do Codex e do Claude Code.

## Licença

Este repositório foi criado apenas para fins educacionais e de prática.



