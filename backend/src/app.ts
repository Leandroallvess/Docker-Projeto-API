import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorMiddleware";

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("📥 Rota acessada:", req.method, req.url);
  next();
});

app.use("/", routes);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

export default app;
