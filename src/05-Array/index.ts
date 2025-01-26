/* 
dois tipos:
- Array<Type>
- Type[]
*/

function soma(...args: Array<number>): number {
    return args.reduce((ac, val) => ac + val, 0);
}
console.log(soma(1, 2, 3, 4));

function concatena(...args: string[]): string {
    return args.join('');
}
console.log(concatena('a', 'b', 'c'))