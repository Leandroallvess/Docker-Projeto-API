import { Categoria } from "../models/categoria";

const categorias: Categoria[] = [
  new Categoria(1, "Roupas"),
  new Categoria(2, "Calçados"),
];

const getCategorias = () => categorias;

const addCategoria = (categoria: Categoria) => {
  categorias.push(categoria);
};

export { getCategorias, addCategoria, Categoria };
