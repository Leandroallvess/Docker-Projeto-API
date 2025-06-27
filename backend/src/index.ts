import express from "express";
import routes from "./routes";
import { Produto } from "./service/produtos";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

routes.get("/produtos", (req, res) => {
  res.json(Produto);
});
