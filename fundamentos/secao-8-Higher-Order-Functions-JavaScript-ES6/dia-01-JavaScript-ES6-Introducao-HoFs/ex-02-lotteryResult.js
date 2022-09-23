/* 
Sorteador de loteria
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

Math.random();
Em outras palavras, a função retornará um número entre 0 e 1

Para gerar números aleatórios na casa do inteiros, devemos multiplicar o método por um inteiro qualquer:
Math.random() * 10

Math.floor(Math.random() * 10)
Agora devemos utilizar a função Math.floor() para retirar a parte flutuante (números decimais).
O código acima irá gerar números aleatórios no seguinte “range” 0, 1, 2, 3, 4, 5, 6, 7, 8, e 9.

O código abaixo gera números aleatórios entre 1 e 10.
Math.floor(Math.random() * 10 + 1)

Como gerar um número randômico tipo bytes ou octet (entre 0 e 256):
Math.floor(Math.random() * 256);

Função sorteio
const sortNumber = (numMin, numMax) => Math.floor(Math.random() * numMax + numMin);
console.log(sortNumber(1, 3));

FORMA CORRETA DE GERAR NÚMERO ALEATÓRIO ENTRE 2 NÚMEROS
Math.floor(Math.random() * (max - min + 1) + min);
Número aleatório entre 2 números
*/

const checarIgualdade = (aposta, numSorteado) => aposta === numSorteado;

const lotteryResult = (aposta, callback) => {
  const numSorteado = Math.floor(Math.random() * 5 + 1);
  return callback(aposta, numSorteado) ? `Parabéns você ganhou! Num sorteado = ${numSorteado}` : `Tente novamente... Num sorteado = ${numSorteado}`;
}

console.log(lotteryResult(3, checarIgualdade));