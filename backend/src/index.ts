import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import dotenv from "dotenv";

// Carrega variáveis de ambiente do .env
dotenv.config();

const app = express();

// Middlewares globais
app.use(express.json());

// Rotas
app.use(routes);

// Middleware de erro genérico (boa prática)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ erro: "Erro interno do servidor" });
});

// Porta a partir do .env, com fallback para 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Backend rodando na porta ${PORT}`);
});
