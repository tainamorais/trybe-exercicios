//Minha tentativa de retornar um array em ordem crescente, transformando números em string, depois pegando o tamanho da maior string no array e fazendo acrescentar 0 à esquerda para que o sort ordene tudo igualmente.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  };
};

console.log(maiorNumero);

let tamanhoStringMaiorNumero = maiorNumero.toString().length;

console.log(tamanhoStringMaiorNumero);


for (i = 0; i < numbers.length; i += 1) {
  numbers[i] = ('00000000000000000000' + numbers[i]).slice(-(tamanhoStringMaiorNumero));
}

console.log(numbers)

let numbersCrescente = numbers.sort();

console.log(numbersCrescente)

