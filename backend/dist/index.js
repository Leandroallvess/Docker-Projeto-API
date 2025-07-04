"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
// Carrega variáveis de ambiente do .env
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares globais
app.use(express_1.default.json());
// Rotas
app.use(routes_1.default);
// Middleware de erro genérico (boa prática)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ erro: "Erro interno do servidor" });
});
// Porta a partir do .env, com fallback para 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Backend rodando na porta ${PORT}`);
});
