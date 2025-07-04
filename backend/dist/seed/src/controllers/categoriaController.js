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
exports.CategoriaController = void 0;
const categoriaService_1 = require("../service/categoriaService");
const service = new categoriaService_1.CategoriaService();
class CategoriaController {
    static listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorias = yield service.listar();
                res.json(categorias);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensagem: "Erro ao listar categorias" });
            }
        });
    }
    static buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const categoria = yield service.buscar(id);
                if (categoria) {
                    res.json(categoria);
                }
                else {
                    res.status(404).json({ mensagem: "Categoria não encontrada" });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensagem: "Erro ao buscar categoria" });
            }
        });
    }
    static criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novaCategoria = yield service.criar(req.body);
                res.status(201).json(novaCategoria);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensagem: "Erro ao criar categoria" });
            }
        });
    }
    static atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const categoriaAtualizada = yield service.atualizar(id, req.body);
                res.json(categoriaAtualizada);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensagem: "Erro ao atualizar categoria" });
            }
        });
    }
    static deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                yield service.deletar(id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensagem: "Erro ao deletar categoria" });
            }
        });
    }
}
exports.CategoriaController = CategoriaController;
