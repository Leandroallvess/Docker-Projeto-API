"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
const produtoController_1 = require("../controllers/produtoController");
const categoriaController_1 = require("../controllers/categoriaController");
console.log("🚦 Rotas carregadas");
const router = (0, express_1.Router)();
// Rotas Usuario
router.get("/usuarios/listar", usuarioController_1.UsuarioController.listar);
router.post("/usuarios/cadastrar", usuarioController_1.UsuarioController.cadastrar);
router.post("/usuarios/login", usuarioController_1.UsuarioController.login);
// Rotas Produto
router.get("/produtos", produtoController_1.ProdutoController.listar);
router.get("/produtos/categoria/:categoriaId", produtoController_1.ProdutoController.listarPorCategoria);
router.post("/produtos", produtoController_1.ProdutoController.criar);
router.put("/produtos/:id", produtoController_1.ProdutoController.atualizar);
router.delete("/produtos/:id", produtoController_1.ProdutoController.deletar);
// Rotas Categoria
router.get("/categorias", categoriaController_1.CategoriaController.listar);
router.get("/categorias/:id", categoriaController_1.CategoriaController.buscar);
router.post("/categorias", categoriaController_1.CategoriaController.criar);
router.put("/categorias/:id", categoriaController_1.CategoriaController.atualizar);
router.delete("/categorias/:id", categoriaController_1.CategoriaController.deletar);
exports.default = router;
