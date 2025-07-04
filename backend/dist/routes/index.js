"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = require("../controllers/categoriaController");
const produtoController_1 = require("../controllers/produtoController");
const validateCategoriaMiddleware_1 = require("../middlewares/validateCategoriaMiddleware");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const validateProdutoMiddleware_1 = require("../middlewares/validateProdutoMiddleware");
const usuarioController_1 = require("../controllers/usuarioController");
const routes = (0, express_1.Router)();
// Categorias
routes.get("/categorias", authMiddleware_1.autenticar, categoriaController_1.CategoriaController.listar);
routes.get("/categorias/:id", authMiddleware_1.autenticar, categoriaController_1.CategoriaController.buscar);
routes.post("/categorias", authMiddleware_1.autenticar, authMiddleware_1.autorizarAdmin, validateCategoriaMiddleware_1.validateCategoria, categoriaController_1.CategoriaController.criar);
routes.put("/categorias/:id", authMiddleware_1.autenticar, categoriaController_1.CategoriaController.atualizar);
routes.delete("/categorias/:id", authMiddleware_1.autenticar, categoriaController_1.CategoriaController.deletar);
// Produtos
routes.get("/produtos", produtoController_1.ProdutoController.listar);
routes.get("/produtos/categoria/:categoriaId", produtoController_1.ProdutoController.listarPorCategoria);
routes.post("/produtos", authMiddleware_1.autenticar, validateProdutoMiddleware_1.validateProduto, produtoController_1.ProdutoController.criar);
routes.put("/produtos/:id", authMiddleware_1.autenticar, produtoController_1.ProdutoController.atualizar);
routes.delete("/produtos/:id", authMiddleware_1.autenticar, produtoController_1.ProdutoController.deletar);
// Usuários & login
routes.post("/usuarios", usuarioController_1.UsuarioController.cadastrar);
routes.post("/login", usuarioController_1.UsuarioController.login);
// Rota protegida para teste
routes.get("/teste-auth", authMiddleware_1.autenticar, (req, res) => {
    res.json({ user: req.user });
});
exports.default = routes;
