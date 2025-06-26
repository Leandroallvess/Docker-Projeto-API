import express from "express";
import routes from "./routes";

const app = express();

app.use("/", routes);

app.get("/dados", (req, res) => {
  res.json({ mensagem: "Mensagem gerada pela API" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

app.use(express.json());
app.use(routes); // aplica todas as rotas

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");
});
