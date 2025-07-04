import { Request, Response, NextFunction } from "express";

interface ApiError extends Error {
  status?: number;
  details?: any;
}

export function errorHandler(
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(`[❌ Erro] ${req.method} ${req.url}`);
  console.error(err);

  const status = err.status || 500;
  const message = err.message || "Erro interno do servidor";
  const isProd = process.env.NODE_ENV === "production";

  res.status(status).json({
    sucesso: false,
    status,
    mensagem: message,
    detalhes: isProd ? null : err.details || null,
  });
}
