// public -> acesso em todo e qualquer lugar
// private -> acesso apenas dentro da classe
// protected -> acesso apenas dentro da classe e classes filhas

// se eu nao colocar modificador de acesso, automaticamente é "public"

export class Escola {
    public readonly nome: string;
    private readonly alunos: Alunos[] = [];

    constructor(nome: string) {
        this.nome = nome
    } 

    // nao precisava colocar "public"
    public adicionaAluno(aluno: Alunos): void {
        this.alunos.push(aluno)
    }

    mostrarAluno(): void {
        for (let aluno of this.alunos) {
            console.log(aluno.nome, aluno.sobrenome)
        }
    }
}

export class Alunos {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) {}
}

const escola = new Escola("Militar")

const aluno1 = new Alunos("Gabriel", "Liz")
const aluno2 = new Alunos("Ana", "Barth")

escola.adicionaAluno(aluno1)
escola.adicionaAluno(aluno2)

console.log(escola)
console.log("----")
escola.mostrarAluno()