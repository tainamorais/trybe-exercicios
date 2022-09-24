// Ex. 01: O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:
console.log('\nExemplo 01')

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyLetter = listNames.some((element) => element[0] === 'T');
console.log(verifyLetter);

const verifyLetter2 = (letter, array) => array.some((element) => element[0] === letter);

console.log(verifyLetter2('W', listNames))



// Ex. 02: O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
console.log('\nExemplo 02')

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const arraySituacaoMaterias = Object.values(grades);
const studentAproved = arraySituacaoMaterias.every((elemento) => elemento === "Aprovado")

console.log(studentAproved);


// Ex. 02: Outra forma:
console.log('\nExemplo 02 - Outra forma');

const grades2 = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const arraySituacaoMaterias2 = Object.values(grades2);
const studentAproved2 = (situacao, array) => array.every((element) => element === situacao);

console.log(studentAproved2('Aprovado', arraySituacaoMaterias2));


// Para Fixar
/* 
Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
*/
console.log('\nPara fixar 01');

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((element) => element === name);
};

console.log(hasName(names, 'Ana'));


/* 
Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every;
*/
console.log('\nPara fixar 02');

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => element.age >= minimumAge);
};

console.log(verifyAges(people, 18));
