/*
Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/


//[2, 3, 2, 5, 8, 2, 3];

function verificaNumeroMaisRepetido(arrayDeNumeros) {
  
  //array para receber um objeto com o número e a qunatidade que ele se repete
  let repeticoes = []; 

  //no 1º for percorro o array e pego o número
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {

    // contador de repetições
    let counter = 0;  

    //2º for compara nº do 1º for da vez e o contador vai somando toda vez que achar um igual no 2º for (mesmo array)
    for (let i2 = 0; i2 < arrayDeNumeros.length; i2 += 1) { 
      if (arrayDeNumeros[i] === arrayDeNumeros[i2]) {
        counter += 1;
      };
    };

    // Quando finalizar a contagem do nº da vez, ele dá um push deste objeto para o array no alto (número da vez e quantidade de repetições)
    repeticoes.push({numero: arrayDeNumeros[i], repete: counter});
  };

  //Declaro 2 variáveis: uma com a maior repetição e outra com o número que tem a maior repetição. Declaração de largada.
  let maiorRepeticao = repeticoes[0].repete;
  let numeroComMaiorRepetição = repeticoes[0].numero;

  //For para percorrer o novo array com o objeto de números e repetições. Ele vai comparar qual o maior número entre as repetições e retornar o número correspondente a ele.
  for (let i3 = 0; i3 < repeticoes.length; i3 += 1) {
    if (repeticoes[i3].repete > maiorRepeticao) {
      maiorRepeticao = repeticoes[i3].repete;
      numeroComMaiorRepetição = repeticoes[i3].numero;
    };
  };


  return numeroComMaiorRepetição;

};

console.log(verificaNumeroMaisRepetido([2, 1, 11, 2, 2, 1, 7, 3, 2, 11, 2, 11, 2260]));
