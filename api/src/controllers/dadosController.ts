import { Request, Response } from "express";

export class DadosController {
  static getDados(req: Request, res: Response): void {
    res.json({ mensagem: "API interna em TypeScript com POO funcionando!" });
  }
}
