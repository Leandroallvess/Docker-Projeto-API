export class Produto {
  id: number;
  nome: string;
  endereco: string;
  valor: number;

  constructor(id: number, nome: string, endereco: string, valor: number) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.valor = valor;
  }
}
