/* 
REDUCE:
arr.reduce( (acc, curr) => {}, 0);
*/

// 01. Utilize o reduce para transformar uma matriz em um array.
console.log('\nExercício 1 - Usando REDUCE');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());



//🚀 02. Próximos exercícios - Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido.
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2.1 - Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
console.log('\nExercício 2.1 - Usando REDUCE');

function reduceNames() {
  return books.reduce((acc, book) => `${acc} ${book.author.name},`, '')
}

console.log(reduceNames());



// 2.2 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;
/* 
arr.reduce( (acc, curr) => {}, 0);
*/
console.log('\nExercício 2.2 - Usando REDUCE e MAP');

function averageAge() {
  const idadesLancamento = books.map((element) => element.releaseYear - element.author.birthYear);
  return idadesLancamento.reduce( (acc, idade) => {
    return acc + idade;
  }, 0)/idadesLancamento.length;
}

console.log(averageAge());



// 2.3 - Encontre o livro com o maior nome.
/*
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};
*/
console.log('\nExercício 2.3 - Usando REDUCE');

function longestNamedBook() {
  return books.reduce( (acc, livro) => acc.name.length > livro.name.length ? acc : livro );
};

console.log(longestNamedBook());



/* 
🚀 Exercício 3
Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

arr.reduce( (acc, curr) => {}, 0);

const expectedResult = 20;
*/
console.log('\nExercício 3 - Usando FOREACH, MAP e REDUCE');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const namesLowerCase = names.map((element) => element.toLocaleLowerCase());

function containsA() {
  let totalOfLettersA = 0;
  names.forEach((name) => {
    const lettersFromName = name.split('');
    totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
      if (currentLetter === 'a' || currentLetter === 'A') {
        return lettersAInName + 1;
      }
      return lettersAInName;
    }, 0);
  });
  return totalOfLettersA;
}

console.log(containsA());



// Meus pensamentos
console.log('\nTestando contagem de números');

const myName = 'banana';
const arrName = myName.split('')
console.log(arrName)
let counter = 0;
const contaA = () => arrName.reduce( (acc, curr) => {
  return curr === 'a' ? counter += 1 : counter;
}, 0);

console.log(contaA())



/* 
🚀 Exercício 4
Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map.

De olho na dica 👀: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

arr.reduce( (acc, curr) => {}, 0);

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
*/
console.log('\nExercício 4 - Usando ');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(alunos, notas) {
  return students.map((element, index) => ({
      name: element,
      average: grades[index].reduce( (acc, curr) => acc + curr)/grades[index].length}))
}

console.log(studentAverage(students, grades));
