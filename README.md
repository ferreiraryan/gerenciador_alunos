-----

# 🎓 Gerenciador de Alunos CLI - Node.js

Um aplicativo de linha de comando (CLI) para cadastrar, listar e salvar perfis de alunos, construído com Node.js e TypeScript.

Desenvolvido como exercício prático dos conceitos de Programação Orientada a Objetos, manipulação de arquivos (JSON), assincronismo e criação de menus interativos com Inquirer.js.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

  - [Node.js](https://nodejs.org/en)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/)

## 📂 Estrutura do Projeto

```
/gerenciador_alunos
│
├── src
│   ├── database
│   │   └── 📄 database.json        # Armazena os dados dos alunos
│   │
│   ├── IAluno
│   │   └── 📜 IAluno.ts             # Interface que define a estrutura de dados de um Aluno
│   │
│   ├── managers
│   │   └── 📜 AlunoManager.ts        # Classe que orquestra a lógica de negócio
│   │
│   ├── models
│   │   └── 📜 Aluno.ts              # Classe que representa o modelo de um Aluno
│   │
│   ├── repository
│   │   └── 📜 alunoRepository.ts    # Classe responsável pelo acesso e manipulação dos dados
│   │
│   ├── utils
│   │   └── 📜 prompts.ts            # Funções para a interface de linha de comando (CLI)
│   │
│   └── 📜 index.ts                  # Ponto de entrada da aplicação
│
├── 📦 package.json
├── 📄 tsconfig.json
└── 📄 README.md                    # Este arquivo
```

## 📥 Instalação e Execução

```sh
# Clone este repositório (substitua pela URL do seu repositório)
$ git clone https://github.com/ferreiraryan/seu-repositorio

# Acesse o diretório do projeto
$ cd seu-repositorio

# Instale as dependências
$ npm install

# Para compilar o TypeScript e executar o projeto
$ npm run start
```

## 🛠️ Uso

O aplicativo é interativo e funciona totalmente pelo terminal. Ao executar `npm run start`, um menu com as seguintes opções será exibido:

  - **Adicionar Aluno**: Inicia um formulário para cadastrar um novo aluno.
  - **Listar Alunos**: Exibe no console todos os alunos já cadastrados.
  - **Sair**: Salva todas as alterações no arquivo `database/alunos.json` e encerra o programa.

## 🤝 Contribuindo

Sinta-se à vontade para contribuir\! Basta seguir estes passos:

1.  Faça um **fork** do projeto.
2.  Crie uma **branch** com a sua funcionalidade (`git checkout -b minha-funcionalidade`).
3.  Faça o commit das suas alterações (`git commit -m 'Adicionando nova funcionalidade'`).
4.  Faça o push para a sua branch (`git push origin minha-funcionalidade`).
5.  Abra um **Pull Request**.

## 📬 Contato

  - **Ryan Ferreira** - [ryanferreira4883@gmail.com](mailto:ryanferreira4883@gmail.com)
  - **GitHub** - [https://github.com/ferreiraryan](https://github.com/ferreiraryan)
  - **LinkedIn** - [https://www.linkedin.com/in/ferryan/](https://www.linkedin.com/in/ferryan/)
