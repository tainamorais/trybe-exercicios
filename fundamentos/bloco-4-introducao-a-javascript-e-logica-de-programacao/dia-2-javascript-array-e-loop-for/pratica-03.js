//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

let media = soma / numbers.length;

console.log(`A soma de todos os números do array numbers é: ${soma}.`);

console.log(`O array numbers possui ${numbers.length} itens.`);

console.log(`Portanto, a média aritmética dos valores do array numbers é: ${media}.`)