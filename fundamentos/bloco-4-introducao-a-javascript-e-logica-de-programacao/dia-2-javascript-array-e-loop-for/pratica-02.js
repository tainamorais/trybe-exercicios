//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
  console.log(soma);
};

console.log(`A soma de todos os valores do array number é: ${soma}.`)