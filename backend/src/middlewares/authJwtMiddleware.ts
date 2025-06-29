import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET ??
  (() => {
    throw new Error("JWT_SECRET não está definida no ambiente");
  })();

// Extendendo a interface Request para incluir user
declare module "express-serve-static-core" {
  interface Request {
    user?: { id: number; nome: string; email: string };
  }
}

export function autenticarJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ mensagem: "Token não fornecido" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Garantir que decoded é do tipo esperado
    if (typeof decoded === "object" && decoded !== null) {
      // ajustar os campos conforme o payload do seu JWT
      req.user = {
        id: (decoded as any).id,
        nome: (decoded as any).nome,
        email: (decoded as any).email,
      };
      next();
    } else {
      return res.status(403).json({ mensagem: "Token inválido" });
    }
  } catch {
    return res.status(403).json({ mensagem: "Token inválido ou expirado" });
  }
}
