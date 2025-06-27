export interface IProduto {
  id: number;
  nome: string;
  endereco: string;
  valor: number;
}

export class Produto implements IProduto {
  constructor(
    public id: number,
    public nome: string,
    public endereco: string,
    public valor: number
  ) {}
}

const produtos: Produto[] = [
  new Produto(1, "Camiseta Polo", "Rua A", 49.9),
  new Produto(2, "Short Jeans", "Rua B", 59.9),
];
