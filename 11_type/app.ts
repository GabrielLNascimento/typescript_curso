let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;

// nvalor = uvalor; -> tipagem errada
nvalor = <number>uvalor;
svalor = <string>uvalor;
svalor += 10

console.log(uvalor, typeof (uvalor));
console.log(nvalor, typeof (nvalor));

console.log(svalor, typeof (svalor));
/*
    nao estou convertendo o valor 10 para string
    estou "dizendo" ao typescript para tratar o valor como string
    porem o valor em si, continua sendo number

    para converter de fato para string:
    svalor = String(uvalor) ou uvalor.toString()
*/

svalor = "30";

// nvalor = svalor; -> erro de tipagem
// nvalor = <number> svalor; -> erro de tipagem (string, number)
nvalor = <number><unknown>svalor; // colocando primeiro para unknown e dps para number
console.log(typeof (nvalor), typeof (svalor));

nvalor = Number(svalor); // converter o valor para number
console.log(typeof (nvalor), typeof (svalor));

svalor = String(nvalor); // converter o valor para string
console.log(typeof (nvalor), typeof (svalor));


// --------------------------------------- //
// transformar numero em string

const num: number = 10;

const str: string = num.toString(num)
const str2: string = String(num)
const str3: string = "" + num
const str4: string = `${num}`


console.log(str, typeof (str));
console.log(str2, typeof (str2));
console.log(str3, typeof (str3));
console.log(str4, typeof (str4));

// transformas string em numero
const str5: string = "10.56";
const num5: number = Number(str5)
const num6: number = parseInt(str5);
const num7: number = parseFloat(str5);
const num8: number = +str5; 

console.log(num5, typeof (num5))
console.log(num6, typeof (num6))
console.log(num7, typeof (num7))
console.log(num8, typeof (num8))

// valores bolenaos
const valor_bool: boolean = true;
const string_bool: string = String(valor_bool)

console.log(string_bool);
