const dados1: [number, string] = [10, 'Gabriel'];
// dados1[0] = 'oi';
dados1[0] = 15
console.log(dados1);



const dados2: readonly [number, string] = [10, "Gabriel"]
// dados2[0] = 15
console.log(dados2)


const dados3: [number, string, ...boolean[]] = [10, "Gabriel", true, false, false]
console.log(dados3)