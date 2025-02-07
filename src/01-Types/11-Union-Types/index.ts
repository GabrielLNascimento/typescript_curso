// para utilizar mais de um tipo a mesma variavel utiliza o "pipe" -> |

function soma(a: number | string, b: number | string) {
    if (typeof a === 'string' || typeof b === 'string') {
        try {
            return Number(a) + Number(b);
        } catch (err) {
            return 'Valores inválidos';
        }
    }

    if (typeof a === 'number' && typeof b === 'number') return a + b;
}

console.log(soma(10, 20))
console.log(soma(10, "20"))
console.log(soma("20", "10"))
console.log(soma(10, "ola"))
