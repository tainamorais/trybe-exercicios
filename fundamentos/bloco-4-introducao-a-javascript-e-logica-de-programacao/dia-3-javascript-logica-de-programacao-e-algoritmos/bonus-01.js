/* 
1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
*/

let n = 3;
let asterisco = '*';
let linhaAsterisco = '';

for (let i = 0; i < n; i += 1) {
  linhaAsterisco += asterisco
}

for (let i2 = 0; i2 < n; i2 += 1) {
  console.log(linhaAsterisco)
}

