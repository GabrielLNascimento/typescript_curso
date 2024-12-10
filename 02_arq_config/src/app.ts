class Curso {
    nome = null
    ano = null
    constructor(nome:any, ano:any) {
        this.nome = nome
        this.ano = ano
    }
}

let c1 = new Curso('Python', 2020)
let c2 = new Curso('JavaScript', 2019)

console.log(c1.nome)
console.log(c2.ano)