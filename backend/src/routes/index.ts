import { Router } from "express";
import { DadosController } from "../controllers/dadosController";
import { getProdutos, Produto } from "../service/produtoService";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("🚀 API de Produtos no ar! Acesse /dados ou /produtos");
});

routes.get("/dados", DadosController.getDados);

routes.get("/produtos", (req, res) => {
  res.json(getProdutos()); // chama a função para retornar os produtos
});

export default routes;
