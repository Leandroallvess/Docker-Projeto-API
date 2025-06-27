import { Produto } from "../models/produto";

const produtos: Produto[] = [
  new Produto(1, "Camiseta Polo", "Rua A", 49.9),
  new Produto(2, "Short Jeans", "Rua B", 59.9),
];

export const getProdutos = () => produtos;
export { Produto };
