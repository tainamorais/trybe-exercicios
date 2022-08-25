/* 
Agora você! Faça o seguinte:
Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
Por fim, recupere o subtítulo e altere-o também.

Utilizando o mesmo template de exercício anterior:
Adicione uma classe igual para os dois parágrafos.
Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
Altere algum estilo do primeiro deles.
Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
*/

//Exemplo
const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

//Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
const tituloPrincipal = document.querySelector('#page-title');
tituloPrincipal.innerText = 'Matrix';

//Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const secondParagraph = document.querySelector('#second-paragraph');
secondParagraph.style.backgroundColor = '#cd33cd';
secondParagraph.style.fontFamily = 'monospace';
secondParagraph.style.fontSize = '1.2rem';

//Por fim, recupere o subtítulo e altere-o também.
const subTitulo = document.querySelector('#subtitle');
subTitulo.innerText = 'Tainá Morais';
subTitulo.style.backgroundColor = '#2F4F4F';
subTitulo.style.color = '#DAA520';
subTitulo.style.fontSize = '1.4rem';
subTitulo.style.fontFamily = 'sans-serif';
subTitulo.style.fontStyle = 'italic';


//Adicione uma classe igual para os dois parágrafos.
//Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
const allP = document.getElementsByClassName('allP');

//Altere algum estilo do primeiro deles.
allP[0].style.letterSpacing = '4px'

//Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
const subTitulo2 = document.getElementsByTagName('h4');
subTitulo2[0].style.letterSpacing = '4px';
