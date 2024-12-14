class Pessoa {
    protected nome: string;
    // metodo construtor ...

    infoPai() {
        console.log(this.nome)
    }
}

class Cidadao extends Pessoa {
    protected idade: number;
    // metodo construtor ...

    infoFilho() {
        super.infoPai()
    }
}