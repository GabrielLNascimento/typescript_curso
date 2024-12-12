// comparação

function soma1(n1: number, n2: number): number {
    return n1 + n2
}

const soma2 = (n1: number, n2: number): number => {
    return n1 + n2
}

// ----------------------------------------------------- //

// elevar ao quadrado
const elevar_2 = (num: number): number => num * num
console.log(elevar_2(6))

// data atual
const data_atual = (): string => {
    const data = new Date()
    
    // return data.toLocaleDateString("pt-BR")

    return data.toString()
}
console.log(data_atual())


// elevar um array inteiro ao cubo
const elevar_3 = (nums: number[]): number[] => {
    return nums.map((e: number) => e ** 3)
}
console.log(elevar_3([1, 2, 3, 4, 5]))


// converter string
const convert_number_to_string = (val: number): string => {
    return String(val)
}
console.log(convert_number_to_string(10))
