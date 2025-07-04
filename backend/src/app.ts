import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorMiddleware";

const app = express();

app.use(express.json());

// Middleware para logar todas as requisições
app.use("/", (req, res, next) => {
  console.log(`📥 Rota acessada: ${req.method} ${req.url}`);
  next();
});

// Monta as rotas a partir da raiz
app.use("/", routes);

// Middleware global para tratamento de erros
app.use(errorHandler);

// Middleware para rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

export default app;
