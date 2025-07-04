"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log("Servindo frontend de:", path_1.default.resolve(__dirname, "../../frontend"));
// 👉 Servir arquivos estáticos da pasta frontend
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../../frontend")));
// 👉 Prefixo para as rotas da API
app.use("/api", routes_1.default);
// 👉 Fallback para SPA (index.html)
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../../frontend/index.html"));
});
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
