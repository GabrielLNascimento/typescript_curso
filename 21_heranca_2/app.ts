class Veiculo {
    public motor: string;

    constructor(m: string) {
        this.motor = m
    }
}

class Carro extends Veiculo {
    modelo: string
    
    constructor(model: string, m: string) {
        super(m)
        this.modelo = model
    }

    info(): void {
        console.log(this.modelo)
        console.log(this.motor)
    }
}

const car1 = new Carro("fiat", "v4")

car1.info()

// --------------------------------------------

class Sorteio {
    numero: number;
    nome: string;

    constructor(n: string) {
        this.numero = this.gerarNumero()
        this.nome = n
    }

    gerarNumero(): number {
        return Math.floor(Math.random() * 100) + 1
    }
}

// --------------------------------------------------

// animais e seus sons

class Animal {
    public nome: string;

    constructor(n: string) {
        this.nome = n
    }
}

class Cachorro extends Animal {
    constructor(n: string) {
        super(n)
    }

    falar(): string {
        return "Au au"
    }
}

const dog1 = new Cachorro("Tobi")
console.log(dog1.falar())


// ---------------------------------

// sistema de produtos

class Produto {
    public nome: string;
    public preco: number;

    constructor(n: string, p: number) {
        this.nome = n;
        this.preco = p;
    }
}

class ProdutoEletronico extends Produto {
    public garantia: number;

    constructor(n: string, p: number, g: number) {
        super(n, p)
        this.garantia = g
    }

    info(): void {
        console.log("Garantia:", this.garantia)
    }
}

class ProdutoAlimenticio extends Produto {
    public dataValidade: number;

    constructor(n: string, p: number, d: number) {
        super(n, p)
        this.dataValidade = d
    }

    info(): void {
        console.log("Validade:", this.dataValidade)
    }
}

const p1 = new ProdutoEletronico("chaleira elétrica", 450, 3)
const p2 = new ProdutoAlimenticio("banana", 10, 4)

p1.info()
p2.info()