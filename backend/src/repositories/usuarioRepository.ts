import { prisma } from "../config/prismaClient";
import { Usuario } from "../entities/usuarioEntities";

export class UsuarioRepository {
  async listarTodos(): Promise<Usuario[]> {
    const usuarios = await prisma.usuario.findMany();
    return usuarios;
  }

  async buscarPorId(id: number): Promise<Usuario | null> {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    return usuario;
  }

  async criar(dados: Omit<Usuario, "id" | "criadoEm">): Promise<Usuario> {
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
      },
    });
    return novoUsuario;
  }

  async atualizar(
    id: number,
    dados: Partial<Usuario>
  ): Promise<Usuario | null> {
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data: dados,
    });
    return usuarioAtualizado;
  }

  async deletar(id: number): Promise<void> {
    await prisma.usuario.delete({ where: { id } });
  }
}
