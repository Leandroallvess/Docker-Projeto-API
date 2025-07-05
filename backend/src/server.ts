import express from "express";
import path from "path";
import routes from "./routes";
import cors from "cors"; // caso esteja usando frontend separado

const app = express();

// Middleware para permitir CORS se necessário
app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

//  Primeiro: Rotas da API
app.use("/api", routes);

//  Depois: servir frontend estático
app.use(express.static(path.resolve(__dirname, "../../frontend")));

//  Por último: fallback para SPA
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../frontend/index.html"));
});

export default app;
