import { Request, Response } from "express";
import { produtoService } from "../service/produtoService";

export class ProdutoController {
  static async listar(req: Request, res: Response) {
    try {
      const produtos = await produtoService.listar();
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao listar produtos" });
    }
  }

  static async listarPorCategoria(req: Request, res: Response) {
    try {
      const categoriaId = Number(req.params.categoriaId);
      const produtos = await produtoService.listarPorCategoria(categoriaId);
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensagem: "Erro ao listar produtos por categoria" });
    }
  }

  static async criar(req: Request, res: Response) {
    try {
      const novoProduto = await produtoService.criar(req.body);
      res.status(201).json(novoProduto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao criar produto" });
    }
  }

  static async atualizar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const produtoAtualizado = await produtoService.atualizar(
        Number(id),
        dados
      );

      if (!produtoAtualizado) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
      }

      return res.json(produtoAtualizado);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao atualizar produto" });
    }
  }

  static async deletar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const produtoDeletado = await produtoService.deletar(Number(id));

      if (!produtoDeletado) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
      }

      return res.status(204).send(); // No Content
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao deletar produto" });
    }
  }
}
