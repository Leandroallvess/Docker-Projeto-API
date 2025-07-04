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
exports.ProdutoRepository = void 0;
const prismaClient_1 = require("../config/prismaClient");
const produtoEntities_1 = require("../entities/produtoEntities");
class ProdutoRepository {
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtos = yield prismaClient_1.prisma.produto.findMany({
                include: { categoria: true },
            });
            return produtos.map((p) => new produtoEntities_1.Produto(p.id, p.nome, p.preco, p.categoria // já que usamos include
            ));
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield prismaClient_1.prisma.produto.findUnique({
                where: { id },
                include: { categoria: true },
            });
            if (!p)
                return null;
            return new produtoEntities_1.Produto(p.id, p.nome, p.preco, p.categoria);
        });
    }
    criar(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const novo = yield prismaClient_1.prisma.produto.create({
                data: {
                    nome: dados.nome,
                    preco: dados.preco,
                    categoriaId: dados.categoriaId,
                },
                include: { categoria: true },
            });
            return new produtoEntities_1.Produto(novo.id, novo.nome, novo.preco, novo.categoria);
        });
    }
    atualizar(id, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizado = yield prismaClient_1.prisma.produto.update({
                where: { id },
                data: dados,
                include: { categoria: true },
            });
            return new produtoEntities_1.Produto(atualizado.id, atualizado.nome, atualizado.preco, atualizado.categoria);
        });
    }
    deletar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prismaClient_1.prisma.produto.delete({ where: { id } });
        });
    }
}
exports.ProdutoRepository = ProdutoRepository;
