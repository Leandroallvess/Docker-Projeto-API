import { Categoria } from "./categoriaEntities";

export interface IProduto {
  id: number;
  nome: string;
  valor: number;
}

class Produto {
  static atualizar(arg0: number, dados: any) {
    throw new Error("Method not implemented.");
  }

  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public categoria?: Categoria // ← aqui está a mudança
  ) {}
}

export { Produto };
