import path from "path";
import express from "express";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// Serve arquivos estáticos do frontend
app.use(express.static(path.resolve(__dirname, "../../frontend")));

// Rotas da API prefixadas por /api
app.use("/api", routes);

// SPA fallback - redireciona para index.html para qualquer rota não conhecida
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
