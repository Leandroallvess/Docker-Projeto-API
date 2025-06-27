import { Router } from "express";
import { DadosController } from "../controllers/dadosController";
import { Produto } from "../service/produtos";

const routes = Router();

routes.get("/dados", DadosController.getDados);

routes.get("/produtos", (req, res) => {
  res.send(produto1.nome);
});

const produto1 = new Produto(1, "Camiseta Polo", "Rua A, 123", 49.9);
//console.log(produto1.nome); // "Camiseta Polo"

export default routes;
