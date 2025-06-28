import { Router } from "express";
import { CategoriaController } from "../controllers/categoriaController";
import { ProdutoController } from "../controllers/produtoController";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("🚀 API de Produtos no ar! Acesse /dados ou /produtos");
});

// Categoria
routes.get("/categorias", CategoriaController.listar);
routes.post("/categorias", CategoriaController.criar);

// Produto
routes.get("/produtos", ProdutoController.listar);
routes.get(
  "/produtos/categoria/:categoriaId",
  ProdutoController.listarPorCategoria
);
routes.post("/produtos", ProdutoController.criar);

export default routes;
