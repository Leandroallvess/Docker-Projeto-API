🚀 Docker Projeto API - Backend
API RESTful construída com Node.js, Express, TypeScript e Prisma ORM, containerizada via Docker.
Possui autenticação JWT, cadastro/login de usuários, e CRUD para usuários, produtos e categorias.

<=======================================================================>

###🧠 Tecnologias
Node.js + Express
TypeScript
Prisma ORM
PostgreSQL
JWT para autenticação e autorização
Docker + Docker Compose
Frontend estático básico (HTML + JS puro) para consumo da API

<----------------------------------------------------------------------->

⚙️ Funcionalidades
Cadastro, login e listagem de usuários
CRUD de categorias (com controle de acesso)
CRUD de produtos vinculados a categorias
Controle de acesso baseado em roles (user, admin)
Frontend simples para cadastro e consumo da API

<------------------------------------------------------------------------>

🚀 Como rodar o projeto
Pré-requisitos
Docker e Docker Compose instalados
Node.js (para rodar local sem Docker, opcional)

Rodando via Docker Compose (recomendado)

Na raiz do projeto, execute:
docker compose up -d --build
Isso irá construir e subir os containers backend e banco PostgreSQL.

Rodando localmente (sem Docker)
Navegue até a pasta backend

Instale dependências:
npm install

Compile TypeScript para JavaScript:
npm run build

Rode a aplicação:
npm start

Seed do banco (usuário admin por padrão)

Para criar dados iniciais no banco, rode:
docker compose run --rm backend npm run seed

<------------------------------------------------------------------------------>

🧱 Estrutura do projeto

Docker-Projeto-API/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── repositories/
│ │ ├── middlewares/
│ │ ├── entities/
│ │ ├── router/index.ts
│ │ ├── app.ts
│ │ └── server.ts
│ ├── prisma/
│ │ ├── schema.prisma
│ │ └── seed.ts
│ ├── package.json
│ └── tsconfig.json
├── frontend/
│ ├── index.html
│ ├── cadastrarUsuario.js
│ └── style.css
├── docker-compose.yml
└── Dockerfile

<-------------------------------------------------------------------------------->

📡 Endpoints principais
POST /api/usuarios/cadastrar - Cadastrar novo usuário

POST /api/usuarios/login - Login de usuário

GET /api/usuarios/listar - Listar usuários

(Demais endpoints para produtos e categorias seguem padrão REST)

<--------------------------------------------------------------------------------->

⚠️ Importante
Caso faça alterações no backend em TypeScript, lembre-se de rodar o build antes de executar a aplicação (npm run build)

Para evitar erros de rota 404 ou receber HTML em respostas JSON, verifique que o servidor está rodando corretamente e que as rotas estão configuradas no router/index.ts

CORS está habilitado para permitir que o frontend (separado) consuma a API

<---------------------------------------------------------------------------------->

👨‍💻 Autor
Leandro Alves

## 🌐 Contato

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/leandro-aallvess-dev)

📜 Licença
Este projeto está licenciado sob a MIT License.
