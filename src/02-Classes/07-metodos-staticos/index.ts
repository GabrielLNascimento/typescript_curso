// metodos estaticos (static) -> nao tenho acesso a ele fora da classe
// Se eu utilizar o nome da classe em si, eu consigo usar o método

// posso criar atributos estaticos, como por exemplo valores padrão

export class Pessoa {
    static pesoPadrao = 60;

    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        public readonly idade: number,
        public readonly peso: number
    ) {}

    static criarPessoa(nome: string, sobrenome: string): Pessoa {
        // passando idade padrão
        return new Pessoa(nome, sobrenome, 0, Pessoa.pesoPadrao);
    }
}

// só consigo acessar o metodo dessa forma
const pessoa1 = Pessoa.criarPessoa("Gabriel", "Liz");
console.log(pessoa1);
