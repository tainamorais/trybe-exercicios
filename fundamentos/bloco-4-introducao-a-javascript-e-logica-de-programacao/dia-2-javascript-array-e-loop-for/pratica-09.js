//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let array25 = [];

for (let i = 0; i < 25; i += 1) {
  array25.push(array25.length+1);
};

console.log(array25);

for (let i = 0; i < array25.length; i += 1) {
  console.log(`${array25[i]} / 2 = ${array25[i] / 2}`);
};