/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/


//1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function incluirMyVision(frase) {
  const myVision = document.querySelectorAll('.center-content p')[1];
  myVision.innerText = frase;
}
console.log(incluirMyVision(`Eu, Tainá Morais, me vejo daqui a dois anos (em 2024) como Web Developer.`));


//2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeMainBackgroundColor(color) {
  let main = document.querySelector('.main-content');
  main.style.backgroundColor = color;
}
console.log(changeMainBackgroundColor('rgb(76,164,109)'));


//3. Crie e execute uma função que mude a cor do quadrado vermelho para branco. #ffffff
function changeSectionBackgroundColor(color) {
  const section = document.querySelector('.center-content');
  return section.style.backgroundColor = color;
}
console.log(changeSectionBackgroundColor('#ffffff'));

/*
ESSA FOI DO JEITO FÁCIL
4. Crie e execute uma função que corrija o texto da tag <h1>.tituloH1.replace(/JavaEscripito/g, correcao).
function corrigirTitulo(frase) {
  const tituloH1 = document.querySelector('.title');
  tituloH1.innerHTML = frase;
}
console.log(corrigirTitulo('Exercício 5.1 - JavaScript'));
*/

//4. Crie e execute uma função que corrija o texto da tag <h1>.tituloH1.replace(/JavaEscripito/g, correcao);
function corrigirH1(errado, certo) {
  const tituloH1 = document.querySelector('.title');
  tituloH1.innerText = tituloH1.innerText.replace(errado, certo);
}
console.log(corrigirH1('JavaEscripito', 'JavaScript'));


//5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function changeTagPToUppercase() {
  let tagP = document.querySelectorAll('p');
  for (value of tagP) {
    value.style.textTransform = 'uppercase'
  }
}
console.log(changeTagPToUppercase())


//6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function showTagsP() {
  let frases = document.querySelectorAll('p');
  for (let value of frases) {
    console.log(value.innerHTML);
  }
}

console.log(showTagsP());


