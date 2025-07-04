import { Categoria } from "../entities/categoriaEntities";
import { prisma } from "../config/prismaClient";

export class CategoriaRepository {
  async listarTodos() {
    return prisma.categoria.findMany({ include: { produtos: true } });
  }

  async buscarPorId(id: number) {
    return prisma.categoria.findUnique({
      where: { id },
      include: { produtos: true },
    });
  }

  async criar(data: Categoria) {
    return prisma.categoria.create({ data });
  }

  async atualizar(id: number, data: Categoria) {
    return prisma.categoria.update({ where: { id }, data });
  }

  async deletar(id: number) {
    return prisma.categoria.delete({ where: { id } });
  }
}
