import { prisma } from "../config/prismaClient";

export const produtoService = {
  async listar() {
    return prisma.produto.findMany({
      include: { categoria: true },
    });
  },

  async listarPorCategoria(categoriaId: number) {
    return prisma.produto.findMany({
      where: { categoriaId },
      include: { categoria: true },
    });
  },

  async criar(dados: any) {
    return prisma.produto.create({
      data: dados,
    });
  },

  async atualizar(id: number, dados: any) {
    return prisma.produto.update({
      where: { id },
      data: dados,
    });
  },

  async deletar(id: number) {
    return prisma.produto.delete({
      where: { id },
    });
  },
};
