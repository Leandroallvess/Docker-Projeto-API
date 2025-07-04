"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware para ler JSON no corpo das requisições
app.use(express_1.default.json());
// Serve arquivos estáticos do frontend
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../../frontend")));
// Rotas da API prefixadas por /api
app.use("/api", routes_1.default);
// SPA fallback - redireciona para index.html para qualquer rota não conhecida
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../../frontend/index.html"));
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
