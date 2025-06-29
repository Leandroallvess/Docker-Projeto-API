import { Request, Response, NextFunction } from "express";

// Simula um token válido — depois você pode usar JWT real
const TOKEN_VALIDO = "meu-token-secreto";

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  const [tipo, token] = authHeader.split(" ");

  if (tipo !== "Bearer" || token !== TOKEN_VALIDO) {
    return res.status(401).json({ mensagem: "Token inválido" });
  }

  // Token válido, segue adiante
  next();
}
