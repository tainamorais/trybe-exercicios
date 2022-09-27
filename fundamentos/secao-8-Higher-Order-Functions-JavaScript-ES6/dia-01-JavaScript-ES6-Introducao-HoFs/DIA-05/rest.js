// PARÂMETRO REST

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.





/* 
Essa é a mesma função
const sumAll = (...array) => array.reduce((a, b) => a + b, 0);
*/

const sumAll = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sumAll(4, 7, 8, 9, 60)); // 88
console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(1, 2, 3))

const numbers = [1, 2, 3, 4];
console.log(sumAll(...numbers))


const formateDate = (year, month, day, _hour, _minute, _second) => `${day}/${month}/${year}`;
const dateInfo = ['1988', '02', '01', '20', '00', '01'];

console.log(formateDate(...dateInfo))