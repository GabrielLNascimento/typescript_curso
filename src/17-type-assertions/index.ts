// condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// nao é mt recomendado, mas funciona
// o objeto nao vai ser nulo "!"
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// type-assertion
// só faço isso se eu tiver ctz q ele existe
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'ola pessoal';
input.disabled = true;

// transformar em numero
const body4 = document.querySelector('body') as unknown as number;
body4.toFixed(2)