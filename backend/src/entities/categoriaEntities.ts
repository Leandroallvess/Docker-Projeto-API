interface ICategoria {
  id: number;
  nome: string;
}

class Categoria implements ICategoria {
  constructor(public id: number, public nome: string) {}
}

export { Categoria, ICategoria };
