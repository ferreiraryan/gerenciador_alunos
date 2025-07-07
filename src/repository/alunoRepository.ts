import fs from "fs";
import { Aluno } from "../models/Aluno";

export class AlunoRepository {
	constructor(private dbFilePath: string) { }


	public readAlunos(): Aluno[] {
		try {
			const fileContent = fs.readFileSync(this.dbFilePath, "utf-8");

			if (fileContent.trim() === "") {
				return [];
			}

			const rawData = JSON.parse(fileContent);

			const isArray = Array.isArray(rawData);

			if (!isArray) {
				return [];
			}

			return rawData.map(p => new Aluno(p.matricula, p.nome, p.idade));

		} catch (error: any) {

			if (error.code === "ENOENT") {
				return [];
			}

			throw error;
		}
	}

	public save(novoAluno: Aluno): void {
		const alunosAtuais = this.readAlunos();
		alunosAtuais.push(novoAluno);
		const novoConteudo = JSON.stringify(alunosAtuais, null, 2);
		fs.writeFileSync(this.dbFilePath, novoConteudo, "utf-8");
	}
}
