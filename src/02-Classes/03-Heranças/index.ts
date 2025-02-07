// utiliza a palavra chave "extends" para herdar de uma classe pai

export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number,
    ) {}

    getNomeCompleto(): string {
        return `Pessoa: ${this.nome} ${this.sobrenome}`
    }

    getIdade(): number {
        return this.idade
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return `Aluno: ${this.nome} ${this.sobrenome}`
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return `Cliente: ${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa("Gabriel", "Liz", 17)
const aluno = new Aluno("Gabriel", "Liz", 17)
const cliente = new Cliente("Gabriel", "Liz", 17)

console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())