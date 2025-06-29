import { Categoria } from "../entities/categoriaEntities";
import { CategoriaRepository } from "../repositories/categoriaRepository";

const repo = new CategoriaRepository();

export class CategoriaService {
  listar() {
    return repo.listarTodos();
  }

  buscar(id: number) {
    return repo.buscarPorId(id);
  }

  criar(categoria: Categoria) {
    return repo.criar(categoria);
  }

  atualizar(id: number, categoria: Categoria) {
    return repo.atualizar(id, categoria);
  }

  deletar(id: number) {
    return repo.deletar(id);
  }
}
export { Categoria };
