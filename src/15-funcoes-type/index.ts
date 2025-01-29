// criar funcao estilo map() -> que passe por cada elemento
// nesses elementos, chamar um callback (outra funcao)
// quero q nessa outra função, dobre os valores

// tipo de um função
// (parametros: tipos) => tipo do retorno
type MapNumbersCB = (item: number) => number;

const DobraValor = (item: number) => item * 2;

function MapNumbers(array: number[], func: MapNumbersCB): number[] {
    const newNumbers: number[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newNumbers.push(func(item));
    }

    return newNumbers;
}

const numbers: number[] = [1, 2, 3, 4, 5]
console.log(MapNumbers(numbers, DobraValor))