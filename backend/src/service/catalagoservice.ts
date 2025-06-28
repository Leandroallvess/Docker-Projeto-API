import { Catalogo } from "../models/catalogo";

class CatalogoService {
  private catalogos: Catalogo[] = [];

  listar(): Catalogo[] {
    return this.catalogos;
  }

  criar(nome: string, descricao: string): Catalogo {
    const id = this.catalogos.length + 1;
    const novoCatalogo = new Catalogo(id, nome, descricao);
    this.catalogos.push(novoCatalogo);
    return novoCatalogo;
  }

  buscarPorId(id: number): Catalogo | undefined {
    return this.catalogos.find((c) => c.id === id);
  }

  atualizar(id: number, nome: string, descricao: string): Catalogo | undefined {
    const catalogo = this.buscarPorId(id);
    if (!catalogo) return undefined;
    catalogo.nome = nome;
    catalogo.descricao = descricao;
    return catalogo;
  }

  deletar(id: number): boolean {
    const index = this.catalogos.findIndex((c) => c.id === id);
    if (index === -1) return false;
    this.catalogos.splice(index, 1);
    return true;
  }
}

export { CatalogoService };
