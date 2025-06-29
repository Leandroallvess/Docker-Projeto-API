import { Request, Response } from "express";
import { CategoriaService } from "../service/categoriaService";

const service = new CategoriaService();

export class CategoriaController {
  static criar(arg0: string, criar: any) {
    throw new Error("Metado não implementado.");
  }
  static buscar(arg0: string, buscar: any) {
    throw new Error("Metado não implementado.");
  }
  static atualizar(arg0: string, atualizar: any) {
    throw new Error("Metado não implementado.");
  }
  static deletar(arg0: string, deletar: any) {
    throw new Error("Metado não implementado..");
  }
  static listar(arg0: string, listar: any) {
    throw new Error("Metado não implementado.");
  }
  async listar(req: Request, res: Response) {
    const categorias = await service.listar();
    res.json(categorias);
  }

  async buscar(req: Request, res: Response) {
    const id = Number(req.params.id);
    const categoria = await service.buscar(id);
    categoria
      ? res.json(categoria)
      : res.status(404).json({ mensagem: "Categoria não encontrada" });
  }

  async criar(req: Request, res: Response) {
    const novaCategoria = await service.criar(req.body);
    res.status(201).json(novaCategoria);
  }

  async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    const categoriaAtualizada = await service.atualizar(id, req.body);
    res.json(categoriaAtualizada);
  }

  async deletar(req: Request, res: Response) {
    const id = Number(req.params.id);
    await service.deletar(id);
    res.status(204).send();
  }
}
