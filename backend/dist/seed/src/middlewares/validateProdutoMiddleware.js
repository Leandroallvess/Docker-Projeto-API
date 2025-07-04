"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduto = validateProduto;
const joi_1 = __importDefault(require("joi"));
const produtoSchema = joi_1.default.object({
    id: joi_1.default.number().optional(), // o Prisma vai gerar automaticamente se necessário
    nome: joi_1.default.string().min(3).max(100).required(),
    preco: joi_1.default.number().precision(2).positive().required(),
    categoriaId: joi_1.default.number().integer().required(),
    categoriaNome: joi_1.default.string().optional(),
});
function validateProduto(req, res, next) {
    const { error } = produtoSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            erro: true,
            mensagem: error.details[0].message,
        });
    }
    next();
}
