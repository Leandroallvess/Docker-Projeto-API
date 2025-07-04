import express from "express";
import path from "path";
import routes from "routes";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend"))); // Ajuste se necessário

// Rotas da API
app.use("/api", routes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

export default app;
