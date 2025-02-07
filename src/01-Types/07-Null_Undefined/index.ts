// undefined -> algo que nao foi definido

// criar objeto com parametro opcional
function createPerson(
    // parametros da funcao
    nome: string,
    sobrenome?: string // | undefined
): {
    // tipo de retorno
    nome: string;
    sobrenome?: string;
} {
    // retorno em si
    return {
        nome,
        sobrenome,
    };
}

console.log(createPerson("Gabriel", "Liz"))
console.log(createPerson("Gabriel")) // sobrenome => undefined



// null -> valor nulo
// posso atribuir a uma variavel

function dobraValor(numero: any) {
    if (typeof numero === "number") return numero * 2
    return null
} 

console.log(dobraValor(3))
console.log(dobraValor("ola"))
