import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_super_secreta_123";

declare module "express-serve-static-core" {
  interface Request {
    user?: { id: number; nome: string; email: string; role: string };
  }
}

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "object" && decoded !== null) {
      req.user = {
        id: (decoded as any).id,
        nome: (decoded as any).nome,
        email: (decoded as any).email,
        role: (decoded as any).role,
      };
      next();
    } else {
      return res.status(403).json({ mensagem: "Token inválido" });
    }
  } catch {
    return res.status(403).json({ mensagem: "Token inválido ou expirado" });
  }
}

export function autorizarAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user) {
    return res.status(401).json({ mensagem: "Usuário não autenticado" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ mensagem: "Acesso negado: apenas admins" });
  }

  next();
}
