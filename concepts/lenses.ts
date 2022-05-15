// As lentes são referências a subpartes específicas de uma estrutura de dados

import {
  lensProp, view, set, assoc, lens, prop,
} from 'ramda';

const pessoa = {
  nome: 'Fernando',
  sobrenome: 'Andrade',
};

const nameLens = lensProp(('nome' as never));

const resultado = view(nameLens, pessoa);
const resultado1 = set(nameLens, ('Luiz Fernando' as never), pessoa);
console.log(pessoa);
console.log(resultado);
console.log(resultado1);
const result = lens(prop('name') as any, assoc('name'));
console.log(result);
