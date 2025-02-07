export class SerVivo {
    private readonly animais: Animal[] = [];

    addAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    getSeresVivos(): void {
        for (const animal of this.animais) {
            console.log(animal);
        }
    } 
}

export class Animal {
    // public readonly nome: string;
    // public readonly raca: string;
    // private readonly animais: Animal[] = [];
    // constructor(nome: string, raca: string) {
    //     this.nome = nome;
    //     this.raca = raca;
    // }

    constructor(
        public readonly nome: string, 
        public readonly raca: string
    ) {}

    public getFala(): string {
        return `${this.nome} da raça ${this.raca} está falando`;
    }
}

export class Cachorro extends Animal {
    public getFala(): string {
        return `${this.nome} da raça ${this.raca} está latindo`;
    }
}

export class Gato extends Animal {
    public getFala(): string {
        return `${this.nome} da raça ${this.raca} está miando`;
    }
}

// criando na classe original
const animal = new Animal('Passaro', 'Calopsita');
console.log(animal)
console.log(animal.getFala());


// criando a classe Cachorro
const cachorro = new Cachorro("Tobi", "Buldog")
console.log(cachorro)
console.log(cachorro.getFala())

// criando a classe Gato
const gato = new Gato("Garfield", "Persa")
console.log(gato)
console.log(gato.getFala())


const seres = new SerVivo()
seres.addAnimal(cachorro)
seres.addAnimal(gato)
seres.addAnimal(animal)

seres.getSeresVivos()