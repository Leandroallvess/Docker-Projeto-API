"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    static atualizar(arg0, dados) {
        throw new Error("Method not implemented.");
    }
    constructor(id, nome, preco, categoria // ← aqui está a mudança
    ) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}
exports.Produto = Produto;
