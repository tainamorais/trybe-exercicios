
//DESTRUCTURING
const patoRico = {
  nome: 'Tio Patinhas',
  birthplace: 'Glasgow, Escócia',
  city: 'Duckburg',
  jobs: ['Engraxate', 'Marinheiro', 'Cowboy', 'Minerador', 'Banqueiro', 'Empreendedor']
};

console.log(`O ${patoRico.name} nasceu em ${patoRico.birthplace} e hoje mora em ${patoRico.city}.`);

const {nome, birthplace, city, jobs} = patoRico;
const [firstJob, secondJob, thirdJob] = jobs // Poderia não estar na desestruturação e estar aqui como patoRico.jobs

console.log(`O ${nome} nasceu em ${birthplace} e hoje mora em ${city}.`);
console.log(`Seu primeiro emprego foi de ${firstJob}, depois como ${secondJob} e em terceiro atuou como ${thirdJob}.`);



// Objeto com objetos
const character = {
  name1: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name2: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name1, age1, homeWorld: { name2: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name1}, ele tem ${age1} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);





// Destructuring com spread operator

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']





// Podemos trocar o nome da variável ao fazermos a desestruturação:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name4, b: classAssigned, c: subject } = student;

console.log(name4); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática




// Podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função,
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas




//PARA FIXAR

/* 
Para Fixar
1. Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
*/

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {
  ...user,
  ...jobInfos
};

console.log(userInfos)



/*
2. Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
*/

const { name, age, nationality, profession, squad, squadInitials } = userInfos;

const message = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`

console.log(message);
