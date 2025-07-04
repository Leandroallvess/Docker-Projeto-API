import { Request, Response } from "express";
import { CategoriaService } from "../service/categoriaService";

const service = new CategoriaService();

export class CategoriaController {
  static async listar(req: Request, res: Response) {
    try {
      const categorias = await service.listar();
      res.json(categorias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao listar categorias" });
    }
  }

  static async buscar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const categoria = await service.buscar(id);
      if (categoria) {
        res.json(categoria);
      } else {
        res.status(404).json({ mensagem: "Categoria não encontrada" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao buscar categoria" });
    }
  }

  static async criar(req: Request, res: Response) {
    try {
      const novaCategoria = await service.criar(req.body);
      res.status(201).json(novaCategoria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao criar categoria" });
    }
  }

  static async atualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const categoriaAtualizada = await service.atualizar(id, req.body);
      res.json(categoriaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao atualizar categoria" });
    }
  }

  static async deletar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await service.deletar(id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao deletar categoria" });
    }
  }
}
