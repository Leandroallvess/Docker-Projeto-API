# Docker-Projeto-API

🧩 Projeto: API + Frontend com Docker
Este projeto é uma aplicação composta por duas partes:

Backend (API) em Node.js

Frontend em HTML, CSS e TypeScript (sem frameworks)

Tudo containerizado e orquestrado com Docker Compose

---

## 📦 Funcionalidades

- Rota `/dados` que retorna uma mensagem JSON.
- Estrutura modular com controllers, services e uso de boas práticas.
- Projeto isolado com Docker.

- ***

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Express
- Docker & Docker Compose
- HTML + CSS puro (Frontend)
- NGINX (para servir o frontend)

---

## ▶️ Como rodar o projeto

### Pré-requisitos:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

### Passos para execução:

1. **Clone o repositório:**

git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

execute no terminal:
npm install = node-modules

2. \*\*Execute o Docker compose
   docker compose up --build

3.\*\*Acesse no navegador ou via curl:

API: http://localhost:3000/dados

Frontend: http://localhost:3001

🔄 Comunicação entre os serviços
O frontend consome os dados diretamente da API via fetch("http://api:3000/...") dentro do container, graças à rede interna criada pelo Docker Compose.

4.\*\*Resposta esperada API 3000/dados:
{
"mensagem": "API interna em TypeScript com POO funcionando!"
}

<--------------------------------------------------------------------->

.
├── api/ # Código-fonte do backend (Node.js)
├── web/ # Frontend HTML + CSS + TypeScript
│ ├── index.html
│ ├── styles.css
│ ├── main.ts
│ ├── Dockerfile
│ └── tsconfig.json
└── docker-compose.yml

<------------------------------------------------------>

🐳 docker-compose.yml

version: "3.8"

services:
api:
build: ./api
ports: - "3000:3000"

web:
build: ./web
ports: - "3001:80"
depends_on: - api

<-------------------------------------------------------->

👨‍💻 Autor
Desenvolvido por Leandro Alves
[LinkedIn](https://www.linkedin.com/in/leandro-aallvess-dev)
