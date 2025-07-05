import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prismaClient";

const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_secreta";

export class UsuarioController {
  static async cadastrar(req: Request, res: Response) {
    const { nome, email, senha, role } = req.body;

    // Validação simples do role (opcional)
    const roleValido = role === "admin" || role === "user" ? role : "user";

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "E-mail já cadastrado" });
    }

    const hash = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hash,
        role: roleValido,
      },
    });

    return res.status(201).json({
      mensagem: "Usuário criado com sucesso!",
      usuario: {
        id: novoUsuario.id,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        role: novoUsuario.role,
      },
    });
  }

  static async login(req: Request, res: Response) {
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
      res.status(500).json({ mensagem: "Erro ao listar usuários" });
    }
  }
}
