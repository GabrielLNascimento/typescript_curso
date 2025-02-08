// antes de criar a classe, coloco a palavra chave "abstract"
// nao posso instanciar a classe com "asbtract"
// serve para criar uma extensão para outras classes

// para criar um metodo abstrato na classe abstrata, todas as classes filhas tem que implementar esse metodo

// se eu colocar "abstract" antes do atributo, é a mesma coisa, todas as classes filhas precisam desse atributo

export abstract class Personagem {
    protected abstract emoji: string;

    constructor(
        protected readonly name: string,
        protected readonly strength: number,
        protected life: number
    ) {}

    atacar(personagem: Personagem): void {
        this.grito();
        personagem.perderVida(this.strength);
    }
    perderVida(ataque: number): void {
        this.life -= ataque;
        console.log(`${this.name} agora tem ${this.life} de vida`);
    }

    abstract grito(): void;
}

export class Guerreiro extends Personagem {
    protected emoji = '\u{1F9B8}';
    grito(): void {
        console.log(this.emoji, 'AHHHH ATACAAAARRRRR');
    }
}
export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';
    grito(): void {
        console.log(this.emoji, 'ROOOOAAAARRR!!!');
    }
}

// const p1 = new Personagem('Gabriel', 10, 100) -> nao posso instanciar dessa maneira

const guerreiro = new Guerreiro('Guerreiro', 10, 100);
const monstro = new Monstro('Zumbi', 15, 50);

guerreiro.atacar(monstro);
monstro.atacar(guerreiro)
