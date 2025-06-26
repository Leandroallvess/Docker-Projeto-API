import { Router } from "express";
import { DadosController } from "../controllers/dadosController";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Bem-vindo à API interna!");
});

routes.get("/dados", DadosController.getDados);

const router = Router();

const produtos = [
  { id: 1, nome: "Camiseta Polo", preco: 49.9 },
  { id: 2, nome: "Short Jeans", preco: 59.9 },
  { id: 3, nome: "Tênis", preco: 159.9 },
  { id: 4, nome: "Calça", preco: 89.9 },
  { id: 5, nome: "Boné", preco: 39.9 },
  { id: 6, nome: "Moleton", preco: 129.9 },
  { id: 7, nome: "Sapato", preco: 459.9 },
];

router.get("/produtos", (req, res) => {
  res.json(produtos);
});

export default routes;
