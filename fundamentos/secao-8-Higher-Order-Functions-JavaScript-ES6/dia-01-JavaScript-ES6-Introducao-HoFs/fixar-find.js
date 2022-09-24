// 01. Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
console.log('\nExercício 1 - Primeira forma')

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  number % 3 === 0 && number % 3 === 0;
};

const isDivisibleBy3And5 = numbers.find((element) => element % 3 === 0 && element % 5 === 0);

console.log(isDivisibleBy3And5);



// 01. OUTRA FORMA
console.log('\nExercício 1 - Outra forma')

const numbers2 = [19, 21, 3, 45, 22, 15];

const findDivisibleBy3And5X = (array) => {
  return array.find((element) => element % 3 === 0 && element % 5 === 0)
};

console.log(findDivisibleBy3And5X(numbers2));



// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
console.log('\nExercício 2')

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  return array.find((element) => element.length === 5);
};

/* 
const findNameWithFiveLetters = (array) => {
  const result = array.find((element) => element.length === 9);
  return result !== undefined ? result : 'Não existe'
};
*/

console.log(findNameWithFiveLetters(names));



// 03. Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
console.log('\nExercício 3')

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((element) => element.id === id)
};

console.log(findMusic('31031685'));

// 03. OUTRA FORMA
console.log('\nExercício 3 - Outra forma')

function findMusic2(id) {
  const musica = musicas.find((element) => element.id === id)
  return `A música solicitada chama-se: ${musica.title}`;
};

console.log(findMusic2('31031685'));