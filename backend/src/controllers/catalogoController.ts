import { Request, Response } from "express";
import { CatalogoService } from "../service/catalagoservice";

const catalogoService = new CatalogoService();

class CatalogoController {
  listar(req: Request, res: Response) {
    const catalogos = catalogoService.listar();
    res.json(catalogos);
  }

  criar(req: Request, res: Response) {
    const { nome, descricao } = req.body;
    if (!nome || !descricao) {
      return res
        .status(400)
        .json({ erro: "Nome e descrição são obrigatórios." });
    }
    const novoCatalogo = catalogoService.criar(nome, descricao);
    res.status(201).json(novoCatalogo);
  }

  buscarPorId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const catalogo = catalogoService.buscarPorId(id);
    if (!catalogo) {
      return res.status(404).json({ erro: "Catálogo não encontrado." });
    }
    res.json(catalogo);
  }

  atualizar(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { nome, descricao } = req.body;
    const catalogoAtualizado = catalogoService.atualizar(id, nome, descricao);
    if (!catalogoAtualizado) {
      return res.status(404).json({ erro: "Catálogo não encontrado." });
    }
    res.json(catalogoAtualizado);
  }

  deletar(req: Request, res: Response) {
    const id = Number(req.params.id);
    const sucesso = catalogoService.deletar(id);
    if (!sucesso) {
      return res.status(404).json({ erro: "Catálogo não encontrado." });
    }
    res.status(204).send();
  }
}

export { CatalogoController };
