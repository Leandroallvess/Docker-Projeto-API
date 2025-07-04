export class Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  criadoEm: Date;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    criadoEm: Date
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.criadoEm = criadoEm;
  }
}
