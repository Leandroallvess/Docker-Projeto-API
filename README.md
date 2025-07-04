# 🚀 Docker Projeto API - Backend

Este é um projeto de API REST construída com **Node.js**, **Express** e **TypeScript**, containerizada com **Docker**. A API serve uma lista de produtos, categoria e usuario.

---

- API RESTful em **Node.js + Express + TypeScript**
- ORM com **Prisma** e banco de dados **PostgreSQL**
- Autenticação com **JWT**
- Frontend estático básico (HTML + JS puro) para consumir a API
- Totalmente **dockerizado** com `docker-compose`

---

🧠 Tecnologias

Node.js + Express

TypeScript

Prisma ORM

PostgreSQL

Docker + Docker Compose

JWT

HTML + JS básico (Frontend)

## 🧪 Funcionalidades

- CRUD de **Categorias** (com autenticação)
- CRUD de **Produtos** (relacionados às categorias)
- Cadastro e login de **usuários**
- Controle de acesso com JWT (`user` e `admin`)
- Frontend que permite **login e listagem de categorias**

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Docker + Docker Compose instalados

### Subir containers

Na raiz do projeto, execute:

## docker compose up -d --build

## 🧱 Estrutura do Projeto

<--------------------------------------------------------------------->

Docker-Projeto-API/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── repositories/
│ │ ├── middlewares/
│ │ ├── entities/
│ │ ├── routes.ts
│ │ └── server.ts
│ ├── prisma/
│ │ ├── schema.prisma
│ │ └── seed.ts
│ └── package.json
├── frontend/
│ └── index.html
├── docker-compose.yml
└── Dockerfile

<------------------------------------------------------>

🛠 Comandos úteis
Rodar seeds do banco (usuário admin por padrão)

docker compose run --rm backend npm run seed

Rotas protegidas
Enviar o token no header:

Authorization: Bearer <token>

<-------------------------------------------------------->

👨‍💻 Autor
Desenvolvido por Leandro Alves
[LinkedIn](https://www.linkedin.com/in/leandro-aallvess-dev)

📌 Licença
Este projeto está licenciado sob a MIT License.
