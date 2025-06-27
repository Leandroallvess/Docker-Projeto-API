import { Router } from "express";
import { DadosController } from "../controllers/dadosController";

const routes = Router();

routes.get("/dados", DadosController.getDados);

routes.get("/", (req, res) => {
  res.send("Seja bem-vindo à API de produtos!");
});

const produtos = [
  { id: 1, nome: "Camiseta Polo", preco: 49.9 },
  { id: 2, nome: "Short Jeans", preco: 59.9 },
];

export default routes;
