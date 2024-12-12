// crie uma função que nao retorne nada, mas que mostre na tela o nome do usuario e a senha em strings

function logar(name: string, pass: string): void {
    console.log(`Usuário: ${name}`);
    console.log(`Senha: ${pass}`)
}
logar("Gabriel", "2310")

// crie uma função de soma que retorne a soma de dois valores numéricos

function soma(n1: number, n2: number): number {
    const res = n1 + n2 // tipo de res é number
    return res // sou obrigado a retornar um valor number
}
console.log(soma(10, 2))
console.log(soma(10.5, 2.3))
// console.log(soma(true, "ola")) -> erro, tipo diferente


// crie uma função que
// -> receba numeros em string
// -> converta para tipo number
// -> retorne a soma dos dois valores convertidos

function soma2(s1: string, s2: string): number {
    // convertendo...
    let n1 = Number(s1)
    let n2 = Number(s2)

    // somando...
    let res = n1 + n2

    return res
}
console.log(soma2("10", "7"))


// --------------------------------------- //

// crie uma função que receba um array e retorne a soma de todos eles

let numeros = [10, 20, 30, 40, 50]

function soma_array(nums: number[]): number {
    let soma: number = 0
    nums.map((e: number) => {
        soma += e
    })
    return soma
}
console.log(soma_array(numeros))


// crie uma função que converta todos os numeros do array para string

function convert_str_num(nums: number[]): string[] {
    let num_str: string[] = []
    for(let n of nums) {
        let n_str = String(n)
        num_str.push(n_str)
    }
    return num_str
}

console.log(convert_str_num(numeros))


// crie uma função que retorna um valor boolean se um array possui numero par

function verify_numbers(nums: number[]): boolean {
    
    // nums.map((e: number) => {
    //     if(e%2 == 0) {
    //         return true
    //     }
    // })
    // função map cria um novo array, e retorna true apenas no array, mas nao na função principal

    // nums.forEach((e: number) => {
    //     if(e%2 == 0) {
    //         return true
    //     }
    // }) -> erro, mesmo motivo

    for (let n of nums) {
        if(n%2 == 0) {
            return true
        }
    }

    return false
}
console.log(verify_numbers(numeros))