"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = exports.CategoriaService = void 0;
const categoriaEntities_1 = require("../entities/categoriaEntities");
Object.defineProperty(exports, "Categoria", { enumerable: true, get: function () { return categoriaEntities_1.Categoria; } });
const categoriaRepository_1 = require("../repositories/categoriaRepository");
const repo = new categoriaRepository_1.CategoriaRepository();
class CategoriaService {
    listar() {
        return repo.listarTodos();
    }
    buscar(id) {
        return repo.buscarPorId(id);
    }
    criar(categoria) {
        return repo.criar(categoria);
    }
    atualizar(id, categoria) {
        return repo.atualizar(id, categoria);
    }
    deletar(id) {
        return repo.deletar(id);
    }
}
exports.CategoriaService = CategoriaService;
