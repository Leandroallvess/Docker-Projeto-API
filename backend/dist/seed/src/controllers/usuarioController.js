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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prismaClient_1 = require("../config/prismaClient");
const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_secreta";
class UsuarioController {
    static cadastrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, role } = req.body;
            // Validação simples do role (opcional)
            const roleValido = role === "admin" || role === "user" ? role : "user";
            const usuarioExistente = yield prismaClient_1.prisma.usuario.findUnique({
                where: { email },
            });
            if (usuarioExistente) {
                return res.status(400).json({ mensagem: "E-mail já cadastrado" });
            }
            const hash = yield bcryptjs_1.default.hash(senha, 10);
            const novoUsuario = yield prismaClient_1.prisma.usuario.create({
                data: {
                    nome,
                    email,
                    senha: hash,
                    role: roleValido,
                },
            });
            return res.status(201).json({
                id: novoUsuario.id,
                nome: novoUsuario.nome,
                email: novoUsuario.email,
                role: novoUsuario.role,
            });
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const usuario = yield prismaClient_1.prisma.usuario.findUnique({ where: { email } });
            if (!usuario) {
                return res.status(404).json({ mensagem: "Usuário não encontrado" });
            }
            const senhaValida = yield bcryptjs_1.default.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).json({ mensagem: "Senha inválida" });
            }
            const token = jsonwebtoken_1.default.sign({
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                role: usuario.role, // necessário para validação de admin
            }, JWT_SECRET, { expiresIn: "1h" });
            return res.json({ token });
        });
    }
}
exports.UsuarioController = UsuarioController;
