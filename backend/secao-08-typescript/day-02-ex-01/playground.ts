import { type } from "os";

// Declarando array de números
let array1: number[] = [200, 201, 404, 500];
let array2: Array<number> = [200, 201, 404, 500];

// Declarando variável que pode ser number ou string
let numberOrString: number | string = 11;
numberOrString = 'eleven';

let arrayNumberOrString: (number | string)[] = [200, 'CREATED', 404, 'NOT FOUND'];

// TUPLA (array de arrays)
let arrayStatusCode: [number, string] = [200, 'OK'];
let array3: [number, string][] = [];

array3.push(arrayStatusCode);
array3.push([404, 'NOT_FOUND']);
// array3.push(['CREATED', 201]);   // não vai, pois não segue o padrão determinado

const arrNumbers = [1, 2, 3, 4, 5, 6, 7];
const arrPeople = ['Tainá', 'Cida', 'Fernanda', 'Maurilio', 'Lenice'];
const trueOrFalse = [true, false];
const numbersAndLetters = ['m', 11, 't', 'f', 44];

function getRandomElement<T>(items: T[]): T {
  const item = Math.floor(Math.random() * items.length);
  return items[item];
};

const sortNumber = getRandomElement<number>(arrNumbers);
const sortPeople = getRandomElement<string>(arrPeople);
const sortBoolean = getRandomElement<boolean>(trueOrFalse);
const sortNumAndStr = getRandomElement<(number | string)>(numbersAndLetters);

console.log({sortNumber, sortPeople, sortBoolean, sortNumAndStr});

interface IPerson {
  name: string,
  birthDate: Date,
  email: string,
};

type Address = {
  street: string,
  city: string,
  state: string,
};

type TPerson = {
  name: string,
  birthDate: Date,
  email: string,
  //email?: string,   (se quisesse como opcional)
  address: Address,
};

type Lawyer = {
  oab: string,
} & IPerson;

interface Doctor extends TPerson {
  crm: string
};

const tai: Lawyer = {
  name: 'Tainá Morais',
  birthDate: new Date('1983-02-04'),
  email: "taina@morais.com",
  oab: '123456789',
};

const cida: Doctor = {
  name: 'Maria Aparecida Faria',
  birthDate: new Date('1979-05-27'),
  email: "cida@faria.com",
  address: {
    street: "Rua 2",
    city: "Magé",
    state: "RJ"
  },
  crm: "987654321"
};
