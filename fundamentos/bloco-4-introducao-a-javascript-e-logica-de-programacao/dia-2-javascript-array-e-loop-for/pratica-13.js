//Descubra valores ímpares existentes no array e imprima esses valores em outro array. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  };
};

if (oddNumbers.length > 0) {
  console.log(oddNumbers);
} else {
  console.log('Nenhum valor ímpar encontrado.');
};