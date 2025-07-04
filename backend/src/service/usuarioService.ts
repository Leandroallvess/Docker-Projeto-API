import { ProdutoRepository } from "../repositories/produtoRepository";
import { Produto } from "../entities/produtoEntities";

export class ProdutoService {
  private produtoRepository = new ProdutoRepository();

  async listarTodos(): Promise<Produto[]> {
    return await this.produtoRepository.listarTodos();
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    return await this.produtoRepository.buscarPorId(id);
  }

  async criar(dados: {
    nome: string;
    preco: number;
    categoriaId: number;
  }): Promise<Produto> {
    return await this.produtoRepository.criar(dados);
  }

  async atualizar(
    id: number,
    dados: Partial<{
      nome: string;
      preco: number;
      categoriaId: number;
    }>
  ): Promise<Produto | null> {
    return await this.produtoRepository.atualizar(id, dados);
  }

  async deletar(id: number): Promise<void> {
    await this.produtoRepository.deletar(id);
  }
}
