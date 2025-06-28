import { Request, Response } from "express";
import {
  getCategorias,
  addCategoria,
  Categoria,
} from "../service/categoriaService";

export class CategoriaController {
  static listar(req: Request, res: Response) {
    res.json(getCategorias());
  }

  static criar(req: Request, res: Response) {
    const { id, nome } = req.body;
    const novaCategoria = new Categoria(id, nome);
    addCategoria(novaCategoria);
    res.status(201).json(novaCategoria);
  }
}
