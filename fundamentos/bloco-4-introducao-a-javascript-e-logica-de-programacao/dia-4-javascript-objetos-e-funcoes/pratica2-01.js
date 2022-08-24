/*
Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara.
verificaPalindrome('arara');
Retorno esperado: true
verificaPalindrome('desenvolvimento');
Retorno esperado: false
*/


function verificaPalindrome(palavra) {
  let palavraArray = palavra.split('');
  let arrayReversa = palavraArray.reverse();
  let palavraReversa = arrayReversa.join().replaceAll(',', '');

  if (palavra === palavraReversa) {
    return true;
  } else {
    return false;
  };
};


console.log(verificaPalindrome('ovo'));
