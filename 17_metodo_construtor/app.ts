class Pessoa {
    nome: string;
    idade: number;
    vivo: boolean;

    constructor(n: string, i: number, v: boolean) {
        this.nome = n;
        this.idade = i;
        this.vivo = v;
        console.log("Pessoa criada")
    }
}

const p1 = new Pessoa("Gabriel", 17, true)

