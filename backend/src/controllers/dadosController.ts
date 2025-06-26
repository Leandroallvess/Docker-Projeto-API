import { Request, Response } from "express";

export class DadosController {
  static getDados(req: Request, res: Response) {
    res.json({
      mensagem: "Mensagem gerada pela API via controller, teste do backend",
    });
  }
}
