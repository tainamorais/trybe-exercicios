/* 
Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):
Crie uma variável clickCount que irá acumular o número de clicks do botão;
Crie a lógica do evento, para que a cada click no botão seja adicionado o valor de 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.
Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja.
*/

const button = document.querySelector('button');
const clicks = document.querySelector('span');
let clickCount = 0;
clicks.innerText = clickCount;

button.addEventListener('click', () => clicks.innerText = clickCount += 1);