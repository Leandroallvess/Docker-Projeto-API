import { Categoria } from "./categoria";

export interface IProduto {
  id: number;
  nome: string;
  valor: number;
}

class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public categoria: Categoria
  ) {}
}

export { Produto };
