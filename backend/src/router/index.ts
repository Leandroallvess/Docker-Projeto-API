import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";
import { ProdutoController } from "../controllers/produtoController";
import { CategoriaController } from "../controllers/categoriaController";

console.log("🚦 Rotas carregadas");

const router = Router();

// Rotas Usuario
router.get("/usuarios/listar", UsuarioController.listar);
router.post("/usuarios/cadastrar", UsuarioController.cadastrar);
router.post("/usuarios/login", UsuarioController.login);

// Rotas Produto
router.get("/produtos", ProdutoController.listar);
router.get(
  "/produtos/categoria/:categoriaId",
  ProdutoController.listarPorCategoria
);
router.post("/produtos", ProdutoController.criar);
router.put("/produtos/:id", ProdutoController.atualizar);
router.delete("/produtos/:id", ProdutoController.deletar);

// Rotas Categoria
router.get("/categorias", CategoriaController.listar);
router.get("/categorias/:id", CategoriaController.buscar);
router.post("/categorias", CategoriaController.criar);
router.put("/categorias/:id", CategoriaController.atualizar);
router.delete("/categorias/:id", CategoriaController.deletar);

export default router;
