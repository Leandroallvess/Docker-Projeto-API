# Docker-Projeto-API

# 🛍️ Docker-Projeto-API - Ecommerce Simples

Este projeto é uma aplicação web simples de **lista de produtos**, composta por:

- ✅ Um **backend (API)** feito em **Node.js + Express + TypeScript**, rodando na porta `3000`.
- ✅ Um **frontend (HTML + CSS + TypeScript)** responsivo e leve, servido via **Nginx**, rodando na porta `3001`.
- ✅ Containers gerenciados por **Docker Compose**.

---

## 🚀 Funcionalidades

### Backend - Porta `3000`

- `/` – Rota raiz com status da API.
- `/dados` – Mensagem gerada pela API via controller.
- `/produtos` – Lista de produtos simulada (JSON).

### Frontend - Porta `3001`

- Interface responsiva.
- Exibe lista de produtos consumindo a API do backend.
- Layout organizado com carrossel de imagens e tabelas (em breve).
- Códigos escritos em HTML, CSS e TypeScript, compilados via Docker.

---

## 🧱 Estrutura do Projeto

<--------------------------------------------------------------------->

Docker-Projeto-API/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │ └── dadosController.ts
│ │ ├── routes/
│ │ │ └── index.ts
│ │ └── index.ts
│ ├── package.json
│ ├── tsconfig.json
│ └── Dockerfile
│
├── frontend/
│ ├── index.html
│ ├── styles.css
│ ├── main.ts
│ ├── tsconfig.json
│ └── Dockerfile
│
├── docker-compose.yml
└── README.md

<------------------------------------------------------>

---

## 🐳 Como rodar com Docker

> Requisitos: Docker e Docker Compose instalados.

### 1. Clone o repositório:

git clone https://github.com/Leandroallvess/Docker-Projeto-API.git
cd Docker-Projeto-API

### 2. Suba os containers

docker compose up --build

### 3. Acesse no navegador:

🌐 Frontend: http://localhost:3001

🛠️ API: http://localhost:3000

📦 Rotas da API
Método Rota Descrição
GET / Status da API
GET /dados Mensagem da API (controller)
GET /produtos Lista de produtos (JSON local)

🐳 docker-compose.yml

version: "3.8"

services:
backend:
build: ./backend
ports: - "3000:3000"
networks: - app-network

frontend:
build: ./frontend
ports: - "3001:80"
depends_on: - backend
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
