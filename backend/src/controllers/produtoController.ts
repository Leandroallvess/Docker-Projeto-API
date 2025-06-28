import { Request, Response } from "express";
import {
  getProdutos,
  getProdutosPorCategoria,
  addProduto,
  Produto,
} from "../service/produtoService";
import { Categoria } from "../models/categoria";

export class ProdutoController {
  static listar(req: Request, res: Response) {
    res.json(getProdutos());
  }

  static listarPorCategoria(req: Request, res: Response) {
    const categoriaId = Number(req.params.categoriaId);
    const produtosFiltrados = getProdutosPorCategoria(categoriaId);
    res.json(produtosFiltrados);
  }

  static criar(req: Request, res: Response) {
    const { id, nome, preco, categoriaId, categoriaNome } = req.body;
    const categoria = new Categoria(categoriaId, categoriaNome);
    const novoProduto = new Produto(id, nome, preco, categoria);
    addProduto(novoProduto);
    res.status(201).json(novoProduto);
  }
}
