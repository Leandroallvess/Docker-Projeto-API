import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Extensão do Request para incluir user
declare module "express-serve-static-core" {
  interface Request {
    user?: { id: number; nome: string; email: string };
  }
}

const SECRET = process.env.JWT_SECRET || "meu-segredo";

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ mensagem: "Token inválido" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);

    if (typeof decoded === "string") {
      // Quando o payload for string, rejeite
      return res.status(401).json({ mensagem: "Token inválido" });
    }

    // Aqui garantimos que decoded é JwtPayload (objeto)
    // Extraímos os dados esperados e forçamos o tipo certo para req.user
    req.user = {
      id: Number(decoded.id),
      nome: String(decoded.nome),
      email: String(decoded.email),
    };

    next();
  } catch (err) {
    return res.status(401).json({ mensagem: "Token inválido" });
  }
}
