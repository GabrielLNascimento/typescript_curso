class Pessoa {
    nome: string;

    constructor(n: string) {
        this.nome = n
    }
}

class Cidadao extends Pessoa {
    
}

const p1 = new Cidadao("Gabriel")