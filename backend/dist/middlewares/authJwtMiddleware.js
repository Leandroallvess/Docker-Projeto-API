"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticarJWT = autenticarJWT;
exports.autorizarAdmin = autorizarAdmin;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_super_secreta_123";
function autenticarJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ mensagem: "Token não fornecido" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        if (typeof decoded === "object" && decoded !== null) {
            req.user = {
                id: decoded.id,
                nome: decoded.nome,
                email: decoded.email,
                role: decoded.role,
            };
            next();
        }
        else {
            return res.status(403).json({ mensagem: "Token inválido" });
        }
    }
    catch (_a) {
        return res.status(403).json({ mensagem: "Token inválido ou expirado" });
    }
}
function autorizarAdmin(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ mensagem: "Usuário não autenticado" });
    }
    if (req.user.role !== "admin") {
        return res.status(403).json({ mensagem: "Acesso negado: apenas admins" });
    }
    next();
}
