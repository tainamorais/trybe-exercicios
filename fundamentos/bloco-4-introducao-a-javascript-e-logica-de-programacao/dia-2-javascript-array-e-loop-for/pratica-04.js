//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

let media = soma / numbers.length;
let mensagem = '';

if (media > 20) {
  mensagem = 'Valor maior que 20.';
} else {
  mensagem = 'Valor menor ou igual a 20.';
};

console.log(`A soma de todos os números do array numbers é: ${soma}.`);

console.log(`O array numbers possui ${numbers.length} itens.`);

console.log(`Portanto, a média aritmética dos valores do array numbers é: ${media}.`)

console.log(mensagem);