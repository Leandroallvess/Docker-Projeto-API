import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_super_secreta_123";

// Estendendo a interface Request para incluir o usuário autenticado
declare module "express-serve-static-core" {
  interface Request {
    user?: { id: number; nome: string; email: string; role: string };
  }
}

export function autenticarJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : undefined;

  if (!token) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  try {
    // Faz a verificação e já tipa como JwtPayload (objeto)
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload | null;

    if (decoded && typeof decoded === "object" && "id" in decoded) {
      // Aqui você pode checar se os campos existem no payload
      req.user = {
        id: Number(decoded.id),
        nome: String(decoded.nome),
        email: String(decoded.email),
        role: String(decoded.role),
      };
      return next();
    } else {
      return res.status(403).json({ mensagem: "Token inválido" });
    }
  } catch (error) {
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
