"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Middleware para logar todas as requisições
app.use("/", (req, res, next) => {
    console.log(`📥 Rota acessada: ${req.method} ${req.url}`);
    next();
});
// Monta as rotas a partir da raiz
app.use("/", routes_1.default);
// Middleware global para tratamento de erros
app.use(errorMiddleware_1.errorHandler);
// Middleware para rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).json({ mensagem: "Rota não encontrada" });
});
exports.default = app;
