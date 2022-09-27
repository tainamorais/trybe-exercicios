const person2 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person2;

console.log(nationality);




// Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0



/* 
Para Fixar
Do jeito que está, quando person é passado para a função getNationality o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.
*/

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`; //Quando não existir, esse será passado

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));