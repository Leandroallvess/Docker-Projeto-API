import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prismaClient";

const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_secreta";

export class UsuarioController {
  static async cadastrar(req: Request, res: Response) {
    console.log("🚀 Método cadastrar chamado");
    try {
      const { nome, email, senha, role } = req.body;
      console.log("➡️ Recebido cadastro:", { nome, email, senha, role });

      // Validação simples do role (opcional)
      const roleValido = role === "admin" || role === "user" ? role : "user";

      const usuarioExistente = await prisma.usuario.findUnique({
        where: { email },
      });
      console.log("🔍 Verificando se usuário existe:", usuarioExistente);

      if (usuarioExistente) {
        console.log("⚠️ E-mail já cadastrado");
        return res.status(400).json({ mensagem: "E-mail já cadastrado" });
      }

      const hash = await bcrypt.hash(senha, 10);
      console.log("🔐 Senha criptografada:", hash);

      const novoUsuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha: hash,
          role: roleValido,
        },
      });
      console.log("✅ Usuário criado:", novoUsuario);

      return res.status(201).json({
        mensagem: "Usuário criado com sucesso!",
        usuario: {
          id: novoUsuario.id,
          nome: novoUsuario.nome,
          email: novoUsuario.email,
          role: novoUsuario.role,
        },
      });
    } catch (erro) {
      console.error("❌ Erro ao cadastrar usuário:", erro);
      return res.status(500).json({ mensagem: "Erro ao cadastrar usuário" });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      const usuario = await prisma.usuario.findUnique({ where: { email } });

      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) {
        return res.status(401).json({ mensagem: "Senha inválida" });
      }

      const token = jwt.sign(
        {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          role: usuario.role,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({ token });
    } catch (erro) {
      console.error("❌ Erro no login:", erro);
      return res.status(500).json({ mensagem: "Erro ao fazer login" });
    }
  }

  static async listar(req: Request, res: Response) {
    try {
      const usuarios = await prisma.usuario.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          role: true,
          criadoEm: true,
        },
      });
      res.json(usuarios);
    } catch (error) {
      console.error("❌ Erro ao listar usuários:", error);
      res.status(500).json({ mensagem: "Erro ao listar usuários" });
    }
  }
}
