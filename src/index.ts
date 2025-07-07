import { AlunoManager } from "./managers/AlunoManager";
import { Aluno } from "./models/Aluno";
import { AlunoRepository } from "./repository/alunoRepository";
import { promptMenuPrincipal, promptParaDetalhesDoAluno } from "./utils/prompts";


const dbPath = `src/database/database.json`;

async function main() {
	let repository = new AlunoRepository(dbPath);
	let alunos = new AlunoManager(repository);
	let loop = true;

	while (loop) {
		const opcao = await promptMenuPrincipal();
		switch (opcao) {
			case 'Adicionar Aluno':
				let aluno = await promptParaDetalhesDoAluno();
				alunos.adicionarAluno(aluno);
				break;
			case 'Listar Alunos':
				alunos.listarAlunos();
				break;
			case 'Sair':
				loop = false;
				break;

		}
	}
}
main();
