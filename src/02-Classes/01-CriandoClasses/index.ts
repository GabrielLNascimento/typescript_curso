// classes sempre vao gerar um objeto

// readonly -> posso apenas ler um atributo, sem alterar o valor
// preciso passar o tipo do modificador de acesso (public, private, protected)
/*
    public: pode ser acessado de qualquer lugar
*/
// constructor -> recebe parametro que vai ser atribuido ao atributo criado

export class Pessoa {
    public readonly nome: string;

    constructor(n: string) {
        this.nome = n;
    }
}
const p1 = new Pessoa('Gabriel');
console.log(p1.nome);
// p1.nome = "Ana" -> erro, nao pode ser alterado, apenas lido

// faz tudo que a classe de cima fez
export class Pessoa1 {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) {}
}
const p2 = new Pessoa1('Gabriel', 'Liz');
console.log(p2.nome, p2.sobrenome);

// biblioteca que vai ter um array de livros do tipo Livros, com metodo para add e mostrar na tela

export class Biblioteca {
    // array de livros
    private readonly livros: Livros[] = [];

    constructor(public readonly nome: string) {}

    addLivro(livro: Livros): void {
        this.livros.push(livro);
    }

    mostraLivros(): void {
        for (let livros of this.livros) {
            console.log(livros)
        }
    }
}

export class Livros {
    constructor(
        public readonly titulo: string,
        public readonly autor: string,
        public readonly pages: number
    ) {}
}

const biblio = new Biblioteca('Biblioteca');

const livro1 = new Livros('Livro 1', 'Autor 1', 100);
const livro2 = new Livros('Livro 2', 'Autor 2', 200);
const livro3 = new Livros('Livro 3', 'Autor 3', 300);

biblio.addLivro(livro1)
biblio.addLivro(livro2)
biblio.addLivro(livro3)

biblio.mostraLivros()