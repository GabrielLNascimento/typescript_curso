// crie uma função com parametros rest, que retorna a soma dos valores q eu passar na chamada da função

function soma(...nums: number[]): number {
    let res: number = 0

    nums.forEach((el: number): void => {
        res += el
    })

    return res
}

console.log(soma(10, 23, 11))


// função que converta strings para numbers usando rest

function convert(...str: string[]): number[] {
    // let num_arr: number[] = [] 
    // str.map((el: string): number => num_arr.push(Number(el)))
    // return num_arr

    return str.map((el: string): number => Number(el))
}

console.log(convert("10", "20", "30"))



// função para concatenar strings
function concat(...str: string[]): string {
    // if (!str) {
    //     return ""
    // }

    // let texto = ""
    // str.forEach((el: string): string => texto += el + " ")
    // return texto

    return str.join(" ")
}

console.log(concat("ola", "tudo", "bem", "com", "voce?"))