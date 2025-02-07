// criar uma classe normal

export class Pessoa {
    constructor(
        public readonly nome: string,

        // quando for utilizar getter ou setter
        // eu colocar um "_" do lado do atributo
        public _cpf: string
    ) {}

    // utiliza palavra chave "get" + "nome do atributo"
    get cpf(): string {
        return this._cpf;
    }

    // utiliza palavra chave "set" + "nome do atributo" + valor para addicionar
    // quem eu quero alterar é o atributo
    set cpf(value: string) {
        this._cpf = value;
    }
}

const p1 = new Pessoa('Lucas', '123.456.789-10');
p1.cpf = '123.456.789-11';
console.log(p1.cpf);
