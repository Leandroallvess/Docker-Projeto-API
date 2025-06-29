import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(`[❌ Erro] ${req.method} ${req.url}`);
  console.error(err);

  const status = err.status || 500;
  const message = err.message || "Erro interno do servidor";

  res.status(status).json({
    sucesso: false,
    status,
    mensagem: message,
    detalhes: err?.details || null, // útil para mensagens do Joi, por exemplo
  });
}
