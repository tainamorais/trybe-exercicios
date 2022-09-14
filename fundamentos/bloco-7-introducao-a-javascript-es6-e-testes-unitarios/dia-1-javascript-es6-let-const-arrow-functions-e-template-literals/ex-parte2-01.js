/* 
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Com base nessas informações:
Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
Dentro da função crie uma variável result.
Crie a lógica para retornar o fatorial de N!.
Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).
Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.
*/

//MINHA RESOLUÇÃO NORMAL
const fatorial = (numero) => {
  let result = 1;
  for (let index = numero; index > 1; index -= 1) {
    result *= index;
  }
  return result;
}

const fatorial4 = fatorial(4);

console.log(`Esse é o fatorial ${fatorial4}.`)


//RECURSIVIDADE
const factorialRec = number => number > 1 ? number * factorialRec(number - 1) : 1;
console.log(factorialRec(4))