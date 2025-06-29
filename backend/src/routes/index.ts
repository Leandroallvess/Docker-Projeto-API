import { Router } from "express";
import { CategoriaController } from "../controllers/categoriaController";
import { ProdutoController } from "../controllers/produtoController";
import { validateCategoria } from "../middlewares/validateCategoriaMiddleware";
import { autenticar } from "../middlewares/authMmiddleware";

const routes = Router();

// Rota principal
routes.get("/", (req, res) => {
  res.send("🚀 API de Produtos no ar! Acesse /categorias ou /produtos");
});

// Categorias
routes.get("/categorias", autenticar, CategoriaController.listar);
routes.get("/categorias/:id", autenticar, CategoriaController.buscar);
routes.post(
  "/categorias",
  autenticar,
  validateCategoria,
  CategoriaController.criar
);
routes.put("/categorias/:id", autenticar, CategoriaController.atualizar);
routes.delete("/categorias/:id", autenticar, CategoriaController.deletar);

// Produtos
routes.get("/produtos", ProdutoController.listar);
routes.get(
  "/produtos/categoria/:categoriaId",
  ProdutoController.listarPorCategoria
);
routes.post("/produtos", autenticar, ProdutoController.criar);
routes.put("/produtos/:id", autenticar, ProdutoController.atualizar);
routes.delete("/produtos/:id", autenticar, ProdutoController.deletar);

export default routes;
