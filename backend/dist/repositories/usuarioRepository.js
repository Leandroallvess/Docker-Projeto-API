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
exports.UsuarioRepository = void 0;
const prismaClient_1 = require("../config/prismaClient");
class UsuarioRepository {
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield prismaClient_1.prisma.usuario.findMany();
            return usuarios;
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield prismaClient_1.prisma.usuario.findUnique({ where: { id } });
            return usuario;
        });
    }
    criar(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoUsuario = yield prismaClient_1.prisma.usuario.create({
                data: {
                    nome: dados.nome,
                    email: dados.email,
                    senha: dados.senha,
                },
            });
            return novoUsuario;
        });
    }
    atualizar(id, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioAtualizado = yield prismaClient_1.prisma.usuario.update({
                where: { id },
                data: dados,
            });
            return usuarioAtualizado;
        });
    }
    deletar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prismaClient_1.prisma.usuario.delete({ where: { id } });
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
