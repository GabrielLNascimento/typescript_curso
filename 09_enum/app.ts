enum dias {
    domingo = 0,
    segunda = 1,
    terça = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])



const d = new Date();
// let indice = d.getDay()
// console.log(dias[indice])



enum cores {
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    azul = "#00f",
    verde = "#0f0"
}

console.log(cores.branco)
console.log(cores["preto"])
// console.log(cores[0]) -> erro


enum tipoUsers {
    USER = 10,
    ADM = 100,
    SUPER = 1000
}

const tp:tipoUsers = tipoUsers.SUPER
console.log(tp)