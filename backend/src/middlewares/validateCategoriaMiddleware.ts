import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const categoriaSchema = Joi.object({
  nome: Joi.string().min(3).required(),
});

export function validateCategoria(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = categoriaSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ error: true, message: error.details[0].message });
  }
  next();
}
