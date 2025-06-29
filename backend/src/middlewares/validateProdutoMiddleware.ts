import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const produtoSchema = Joi.object({
  id: Joi.number().optional(), // o Prisma vai gerar automaticamente se necessário
  nome: Joi.string().min(3).max(100).required(),
  preco: Joi.number().precision(2).positive().required(),
  categoriaId: Joi.number().integer().required(),
  categoriaNome: Joi.string().optional(),
});

export function validateProduto(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = produtoSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      erro: true,
      mensagem: error.details[0].message,
    });
  }

  next();
}
