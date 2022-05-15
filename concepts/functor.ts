// functor é algo que segura um valor de qualquer tipo e deve tem um método map
// o map pode produzir o mesmo tipo ou um tipo diferente
// e.g:
const Identity = (x: any) => ({
  value: x,
  map: (fn: Function) => Identity(fn(x)),
});

const clientName = Identity('Fernando'); // { value: 'Fernando', map: [Function: map] }

const newClientName = clientName.map((name: string) => name.toUpperCase());

console.log(newClientName); // { value: 'FERNANDO', map: [Function: map] }
console.log(newClientName.value); // FERNANDO
