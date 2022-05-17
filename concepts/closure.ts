// closure é uma função que lembra do escope das variárveis, mesmo após ter sido executado

/*
e.g: usando cache podemos armazenar informações sobre uma variável
*/

const caching = {} as any;
const adicionar10 = (num: number) => {
  if (num in caching) return caching[num];
  caching[num] = num + 10;
  return caching[num];
};

/*
irá executar e armazenar o valor  de retorno no cache
na próxima execução irá retornar o cache do cache pois exeiste dentro do objeto
*/

adicionar10(5);
adicionar10(5);

/*
já que  isso é sobre programação funcional não podemos mutar o que está de fora da função
para isso closures é capaz de resolver esse problema
*/

const plus20 = () => {
  const cache = {} as any;
  return (num: number) => {
    if (num in cache) return cache[num];
    cache[num] = num + 20;
    console.log(cache[num]);
    return cache[num];
  };
};

/*
na segunda execução por não ter um argumento novo o closure irá lembra do 55
e executar a segunda condição
*/

const getPlus20 = plus20();
getPlus20(5);
getPlus20(6);
getPlus20(5);
getPlus20(6);
getPlus20(6);
getPlus20(7);

/*
já que éisso é sobre programação funcional não podemos mutar o que está de fora da função
para isso closures é capaz de resolver esse problema
*/
