"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategoria = validateCategoria;
const joi_1 = __importDefault(require("joi"));
const categoriaSchema = joi_1.default.object({
    nome: joi_1.default.string().min(3).required(),
});
function validateCategoria(req, res, next) {
    const { error } = categoriaSchema.validate(req.body);
    if (error) {
        return res
            .status(400)
            .json({ error: true, message: error.details[0].message });
    }
    next();
}
