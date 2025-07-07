import path from "path";
import { IAluno } from "../IAluno/IAluno";
import { Aluno } from "../models/Aluno";
import { AlunoRepository } from "../repository/alunoRepository";

export class AlunoManager {

	constructor(private repository: AlunoRepository) { }

	private alunos: IAluno[] = [];


	public adicionarAluno(novoAluno: IAluno): void {
		const matriculaExistente = this.alunos.some(
			aluno => aluno.matricula.toLowerCase() === novoAluno.matricula.toLowerCase()
		);

		if (matriculaExistente) {
			console.error(`\n já possui aluno com essa matrícula! `);
		} else {
			this.alunos.push(novoAluno);
			console.log('\n--- Lista de Alunos ---');
			this.alunos.forEach(alunoData => {
				const alunoInstance = new Aluno(alunoData.matricula, alunoData.nome, alunoData.idade);
				alunoInstance.ExibirDetalhes();
				this.repository.save(alunoInstance)
				console.log('-------------------------');
			});
		}

	}

	public listarAlunos(): void {
		let DbAlunos = this.repository.readAlunos()

		console.log(DbAlunos)

	}
}
