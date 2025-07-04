import { prisma } from "../config/prismaClient";
import { Produto } from "../entities/produtoEntities";
import { Categoria } from "../entities/categoriaEntities";

export class ProdutoRepository {
  async listarTodos(): Promise<Produto[]> {
    const produtos = await prisma.produto.findMany({
      include: { categoria: true },
    });

    return produtos.map(
      (p: Produto) =>
        new Produto(
          p.id,
          p.nome,
          p.preco,
          p.categoria as Categoria // já que usamos include
        )
    );
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    const p = await prisma.produto.findUnique({
      where: { id },
      include: { categoria: true },
    });

    if (!p) return null;

    return new Produto(p.id, p.nome, p.preco, p.categoria as Categoria);
  }

  async criar(dados: {
    nome: string;
    preco: number;
    categoriaId: number;
  }): Promise<Produto> {
    const novo = await prisma.produto.create({
      data: {
        nome: dados.nome,
        preco: dados.preco,
        categoriaId: dados.categoriaId,
      },
      include: { categoria: true },
    });

    return new Produto(
      novo.id,
      novo.nome,
      novo.preco,
      novo.categoria as Categoria
    );
  }

  async atualizar(
    id: number,
    dados: Partial<{
      nome: string;
      preco: number;
      categoriaId: number;
    }>
  ): Promise<Produto | null> {
    const atualizado = await prisma.produto.update({
      where: { id },
      data: dados,
      include: { categoria: true },
    });

    return new Produto(
      atualizado.id,
      atualizado.nome,
      atualizado.preco,
      atualizado.categoria as Categoria
    );
  }

  async deletar(id: number): Promise<void> {
    await prisma.produto.delete({ where: { id } });
  }
}
