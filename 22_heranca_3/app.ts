class Pessoa {
    protected id: number;
    public nome: string;

    constructor(id: number, n: string) {
        this.id = id
        this.nome = n
    }
}

class Cidadao extends Pessoa {
    public cor: string;

    constructor(cor: string, id: number, n: string) {
        super(id, n)
        this.cor = cor
    }

    info(): void {
        console.log(this.id)
    }
}

const p1 = new Cidadao("branco", 10, "Gabriel")
p1.info()
