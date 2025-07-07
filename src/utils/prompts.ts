import inquirer from 'inquirer';
import { IAluno } from '../IAluno/IAluno'; // Assumindo que o caminho é este

// 2. Adicionar a palavra-chave 'async' antes de 'function'
export async function promptParaDetalhesDoAluno(): Promise<IAluno> {

	const perguntas = [
		{
			type: "input",
			name: "matricula",
			message: "Qual é a matrícula do aluno?",
			validate: (input: string) => {
				if (input.trim() === '') {
					return 'A matrícula não pode ser vazia.';
				}
				return true;
			}
		},

		{
			type: "input",
			name: "nome",
			message: "Qual é o nome do aluno?"
		},
		{
			type: "number",
			name: "idade",
			message: "Qual é a idade do aluno?",
			validate: (input: number) => {
				if (input <= 0) {
					return 'Por favor, insira uma idade válida.';
				}
				return true;
			}
		},
	];

	const respostas = await inquirer.prompt(perguntas as any);

	return {
		matricula: respostas.matricula,
		nome: respostas.nome,
		idade: respostas.idade
	};
}


export async function promptMenuPrincipal(): Promise<string> {
	const pergunta = [
		{
			type: 'list',
			name: 'opcaoEscolhida',
			message: 'O que você deseja fazer?',
			choices: [
				'Adicionar Aluno',
				'Listar Alunos',
				'Sair',
			],
		},
	];

	const resposta = await inquirer.prompt(pergunta as any);
	return resposta.opcaoEscolhida;
}


