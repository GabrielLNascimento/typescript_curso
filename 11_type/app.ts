let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;

// nvalor = uvalor; -> tipagem errada
nvalor = <number>uvalor; 
svalor = <string>uvalor; 
svalor += 10

console.log(uvalor, typeof(uvalor));
console.log(nvalor, typeof(nvalor));

console.log(svalor, typeof(svalor));
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
console.log(typeof(nvalor), typeof(svalor))

nvalor = Number(svalor); // converter o valor para number
console.log(typeof(nvalor), typeof(svalor))

svalor = String(nvalor); // converter o valor para string
console.log(typeof(nvalor), typeof(svalor))
