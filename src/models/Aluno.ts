import { IAluno } from "../IAluno/IAluno";

export class Aluno implements IAluno {
	constructor(
		public matricula: string,
		public nome: string,
		public idade: number
	) { }

	public ExibirDetalhes(): String {
		return `nome: ${this.nome}\n matricula: ${this.matricula} \n idade: ${this.idade}`
	}
}
