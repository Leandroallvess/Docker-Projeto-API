"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const produtoService_1 = require("../service/produtoService");
class ProdutoController {
    static listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const produtos = yield produtoService_1.produtoService.listar();
                res.json(produtos);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensagem: "Erro ao listar produtos" });
            }
        });
    }
    static listarPorCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaId = Number(req.params.categoriaId);
                const produtos = yield produtoService_1.produtoService.listarPorCategoria(categoriaId);
                res.json(produtos);
            }
            catch (error) {
                console.error(error);
                res
                    .status(500)
                    .json({ mensagem: "Erro ao listar produtos por categoria" });
            }
        });
    }
    static criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoProduto = yield produtoService_1.produtoService.criar(req.body);
                res.status(201).json(novoProduto);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensagem: "Erro ao criar produto" });
            }
        });
    }
    static atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const dados = req.body;
                const produtoAtualizado = yield produtoService_1.produtoService.atualizar(Number(id), dados);
                if (!produtoAtualizado) {
                    return res.status(404).json({ mensagem: "Produto não encontrado" });
                }
                return res.json(produtoAtualizado);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ mensagem: "Erro ao atualizar produto" });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const produtoDeletado = yield produtoService_1.produtoService.deletar(Number(id));
                if (!produtoDeletado) {
                    return res.status(404).json({ mensagem: "Produto não encontrado" });
                }
                return res.status(204).send(); // No Content
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ mensagem: "Erro ao deletar produto" });
            }
        });
    }
}
exports.ProdutoController = ProdutoController;
