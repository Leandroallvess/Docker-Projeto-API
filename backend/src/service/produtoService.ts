import { Produto } from "../models/produto";
import { Categoria } from "./categoriaService";

const produtos: Produto[] = [
  new Produto(1, "Camiseta Polo", 49.9, new Categoria(1, "Roupas")),
  new Produto(2, "Tênis Nike", 199.9, new Categoria(2, "Calçados")),
];

const getProdutos = () => produtos;

const getProdutosPorCategoria = (categoriaId: number) =>
  produtos.filter((produto) => produto.categoria.id === categoriaId);

const addProduto = (produto: Produto) => {
  produtos.push(produto);
};

export { getProdutos, getProdutosPorCategoria, addProduto, Produto };
