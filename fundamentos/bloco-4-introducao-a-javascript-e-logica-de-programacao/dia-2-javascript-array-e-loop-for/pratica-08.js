//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

//Minha resolução sozinha:

let array25 = [];

for (let i = 0; i < 25; i += 1) {
  array25.push(array25.length+1);
};

console.log(array25);



//Resolução do curso: 

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);
