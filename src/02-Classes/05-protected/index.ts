// private -> posso acesar apenas na classe q eu criei
// protected -> posso acesar apenas na classe q eu criei e classes filhas

export class Empresa {
    public readonly nome: string;
    protected readonly colaboradores: Colaborador[] = [];

    constructor(n: string) {
        this.nome = n;
    }

    public addColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    public mostrarColaboradores(): void {
        for (let colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }

    public removerColaborador(): Colaborador | null {
        // colaborador pode ser undefined
        // return this.colaboradores.pop(); -> erro
        const colaboradorRemoved = this.colaboradores.pop();
        
        // verifico se o colaborador existe
        if (colaboradorRemoved) return colaboradorRemoved;
        
        // se nao existir eu retorno null
        return null;
    }
}

export class Udemy extends Empresa {
    constructor() {
        super('Udemy');
    }
}

export class Colaborador {
    // nome e sobrenome do colaborador
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) {}
}

const empUdemy = new Udemy();
const colaborador1 = new Colaborador('Luiz', 'Miranda');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Miranda');

empUdemy.addColaborador(colaborador1);
empUdemy.addColaborador(colaborador2);
empUdemy.addColaborador(colaborador3);

// remover colaborador
const colaboradorRemovido = empUdemy.removerColaborador();

console.log(colaboradorRemovido)
console.log(empUdemy)

console.log("----------")

empUdemy.mostrarColaboradores();