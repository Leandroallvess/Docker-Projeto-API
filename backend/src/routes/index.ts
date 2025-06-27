import { Router } from "express";
import { DadosController } from "../controllers/dadosController";
import { Produto } from "../service/produtos";

const routes = Router();

routes.get("/dados", DadosController.getDados);

routes.get("/", (req, res) => {
  res.send("Seja bem-vindo à API de produtos!");
});

routes.get("/produtos", (req, res) => {
  res.json(Produto);
});

export default routes;
