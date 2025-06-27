# 🚀 Docker Projeto API - Backend

Este é um projeto de API REST construída com **Node.js**, **Express** e **TypeScript**, containerizada com **Docker**. A API serve uma lista de produtos e uma rota de exemplo para testes.

---

## 📦 Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Docker
- ts-node-dev

---

## 🚀 Funcionalidades

### Backend - Porta `3000`

### 3. Acesse no navegador:

🛠️ API: http://localhost:3000

📦 Rotas da API
Método Rota Descrição
GET / Status da API
GET /dados Mensagem da API (controller)
GET /produtos Lista de produtos (JSON local)

- `/` – Rota raiz com status da API. // 🚀 API de Produtos no ar! Acesse /dados ou /produtos
- `/dados` – Mensagem gerada pela API via controller. // "Mensagem gerada pela API via controller, teste do backend"
- `/produtos` – Lista de produtos simulada (JSON).

---

## 🧱 Estrutura do Projeto

<--------------------------------------------------------------------->

Docker-Projeto-API/
├── backend/
│ ├── Dockerfile
│ ├── package.json
│ ├── tsconfig.json
│ ├── .env
│ ├── src/
│ │ ├── index.ts
│ │ ├── routes/
│ │ │ └── index.ts
│ │ ├── controllers/
│ │ │ └── dadosController.ts
│ │ ├── models/
│ │ │ └── produto.ts
│ │ ├── service/
│ │ │ └── produtoService.ts
│ │ └── utils/
├── docker-compose.yml

<------------------------------------------------------>

### ✅ Rodando Localmente

# Clone o projeto

git clone https://github.com/Leandroallvess/Docker-Projeto-API.git

# Acesse a pasta do backend

cd Docker-Projeto-API/backend

# Instale as dependências

npm install

# Rode a aplicação em modo desenvolvimento

npm run dev

A API ficará disponível em: http://localhost:3000

## 🐳 Como rodar com Docker

> Requisitos: Docker e Docker Compose instalados.

### 1. Clone o repositório:

git clone https://github.com/Leandroallvess/Docker-Projeto-API.git
cd Docker-Projeto-API

### 2. Suba os containers

docker compose up --build

<------------------------------------------------------->
🐳 docker-compose.yml

version: "3.8"

services:
backend:
build: ./backend
ports: - "3000:3000"
networks: - app-network

networks:
app-network:
driver: bridge

<-------------------------------------------------------->

👨‍💻 Autor
Desenvolvido por Leandro Alves
[LinkedIn](https://www.linkedin.com/in/leandro-aallvess-dev)

📌 Licença
Este projeto está licenciado sob a MIT License.
