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
exports.ProdutoService = void 0;
const produtoRepository_1 = require("../repositories/produtoRepository");
class ProdutoService {
    constructor() {
        this.produtoRepository = new produtoRepository_1.ProdutoRepository();
    }
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.listarTodos();
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.buscarPorId(id);
        });
    }
    criar(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.criar(dados);
        });
    }
    atualizar(id, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.atualizar(id, dados);
        });
    }
    deletar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.produtoRepository.deletar(id);
        });
    }
}
exports.ProdutoService = ProdutoService;
