/* 
🚀 Organizando biblioteca


*/

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

/*
01. Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];
*/
console.log('\n01. Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA\nUsando MAP')

function formatedBookNames() {
  return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
}

console.log(formatedBookNames());



/*
02. Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.


const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];
*/
console.log('\n02.Construa um array de objetos a partir do array de livros. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha \nUsando MAP e SORT')
//arr.sort((a, b) => a - b);

function nameAndAge(arr) {
  return arr.sort((a, b) => (a.releaseYear - a.author.birthYear) - (b.releaseYear - b.author.birthYear)).map((element) => (
    {
      age: element.releaseYear - element.author.birthYear,
      author: element.author.name
    }
  ))
}

console.log(nameAndAge(books));





/*
03. Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const expectedResult = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];
*/
console.log('\n03.Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia. \nUsando FILTER + SORT (plus para ordenar por id')

function fantasyOrScienceFiction(arr, gen1, gen2) {
  return arr.filter((element) => element.genre === gen1 || element.genre === gen2).sort((a, b) => a.id - b.id);
}

console.log(fantasyOrScienceFiction(books, 'Ficção Científica', 'Fantasia'))




/*
04. Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];
*/
console.log('\n04.Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.. \nUsando FILTER e SORT.')

function oldBooksOrdered() {
  return books.filter((element) => (2022 - element.releaseYear)  > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered());




/*
05. Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];
*/
console.log('\n05. Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.\nUsando FILTER, MAP e SORT.');

function fantasyOrScienceFictionAuthors() {
  return books.filter((element) => element.genre ===  'Ficção Científica'|| element.genre === 'Fantasia').map((element) => element.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors());





/*
06. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
*/
console.log('\n06. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.\nUsando FILTER e MAP.');

function oldBooks() {
  return books.filter((element) => (2022 - element.releaseYear) > 60).map((element) => element.name)
}

console.log(oldBooks());





/*
07. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const expectedResult = 'O Senhor dos Anéis';
*/
console.log('\n07. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.\nUsando FIND ou FILTER.');

function authorWith3DotsOnName() {
  return books.find((element) => (
   element.author.name[1] === '.'
   && element.author.name[4] === '.'
   && element.author.name[7] === '.'
  )).name;
}

console.log(authorWith3DotsOnName());
