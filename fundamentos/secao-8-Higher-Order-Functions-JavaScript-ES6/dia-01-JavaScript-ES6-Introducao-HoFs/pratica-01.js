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

// Adicione o código do exercício aqui:

// 01. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
console.log('\nExercício 1');

const names = ['João', 'Irene', 'Fernando', 'Maria'];

function authorBornIn1947(array, ano) {
  const infos = array.find((element) => element.author.birthYear === ano);
  return infos.author.name;
};

console.log(authorBornIn1947(books, 1947));


// 02. Retorne o nome do livro de menor nome.
console.log('\nExercício 2 - Usando sort');

books.sort((a, b) => a.name.length - b.name.length);
console.log(books[0].name);


// 02. Retorne o nome do livro de menor nome.
console.log('\nExercício 2 - Usando forEach indicado pelo course');

// const nomes = ['Tainá', 'Cida', 'Fernanda'];

const menorNome = (arr) => {
  let menorPalavra;
  arr.forEach((element) => {
    if (!menorPalavra || element.name.length < menorPalavra.length) {
      menorPalavra = element.name;
    }
  })
  return menorPalavra;
}

console.log(menorNome(books));



// 03. Encontre o primeiro livro cujo nome possui 26 caracteres.
console.log('\nExercício 3 - Usando find');

// const nomes = ['Tainá', 'Cida', 'Fernanda'];
// const name26Characteres = nomes.find((nome) => nome.length === 4);

const name26Characteres = (arr, number) => arr.find((element) => element.name.length === number);

console.log(name26Characteres(books, 26));



// 04. Ordene os livros por data de lançamento em ordem decrescente.
// arr.sort((a, b) => b - a);
console.log('\nExercício 4 - Usando sort');

// const lancamentoOrdemDecrescente = books.sort((a, b) => b.releaseYear - a.releaseYear);
const lancamentoOrdemDecrescente = (arr) => arr.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(lancamentoOrdemDecrescente(books))



// 05. Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
// Século XX: 1901 a 2000
console.log('\nExercício 5 - Usando every');
// const years = [1901, 2000, 1936, 1983, 1979]

// const expectedResult = false;

function everyoneWasBornOnSecXX(arr, minYear, maxYear) {
  return arr.every((element) => element.author.birthYear >= minYear && element.author.birthYear <= maxYear)
};

console.log(everyoneWasBornOnSecXX(books, 1901, 2000));


// 06. Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
console.log('\nExercício 6 - Usando some');

// const expectedResult = true;

function someBookWasReleaseOnThe80s(arr, minYear, maxYear) {
  return arr.some((element) => element.releaseYear >= minYear && element.releaseYear <= maxYear)
};

console.log(someBookWasReleaseOnThe80s(books, 1980, 1989));



// 07. Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
console.log('\nExercício 7 - Usando every e some');

// const expectedResult = true;

const expectedResult = false;

const years2 = [
  {
    name: 'Cida',
    year: 1979
  },

  {
    name: 'Tainá',
    year: 1983
  },

  {
    name: 'Penha',
    year: 1957
  },

  {
    name: 'Karen',
    year: 1983
  }
]

function nascimentosDiferentes() {
  return years2.every((oneYear) => !years2.some((someYear) => (someYear.year === oneYear.year) && (someYear.name !== oneYear.name)))
}

function authorUnique() {
  return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());
console.log(nascimentosDiferentes());


// nenhum autor nasceu no mesmo ano / todas datas nascimento diferentes = true
// alguns autores nasceram no mesmo / alguma data de nascimento igual = false