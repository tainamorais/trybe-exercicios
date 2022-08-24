/*
Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be');
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan');
Retorno esperado: false

*/


function verificaFimPalavra(stringWord, stringEnding) {
  if (stringWord.substr(-(stringEnding.length)) === stringEnding) {
    return true;
  } else {
    return false;
  };
};



console.log(verificaFimPalavra('trybe', 'be'));
