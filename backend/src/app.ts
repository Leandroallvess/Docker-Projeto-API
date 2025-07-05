import express from "express";
import path from "path";
import routes from "./routes";

const app = express();

// Middleware para ler JSON
app.use(express.json());

// ✅ ROTAS DA API DEVEM VIR PRIMEIRO
app.use("/api", routes);

// ✅ SOMENTE DEPOIS: servir arquivos do frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// ✅ Fallback para SPA (só se necessário — se usar React, Vue etc.)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/index.html"));
});

export default app;
