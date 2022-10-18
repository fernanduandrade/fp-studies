const add = (a: number) => (b: number) => a + b;

const addTen = add(10);

const arrei = [1, 2, 3, 4, 5, 6, 7, 9];

console.log(arrei.map(addTen));

interface Pessoa {
  nome: string;
  comida: string;
  esporte: string;
  idade: number;
}

const usuario: Pessoa = {
  idade: 24,
  nome: 'Fernando',
  comida: 'Lasanha',
  esporte: 'Volêi',
};

const prop = (chave: string) => (objeto: Pessoa) => objeto[chave as keyof Pessoa];
console.log(prop('comida')(usuario));
