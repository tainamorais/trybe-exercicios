/* 
O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
🚀 Adicione a tag main com a classe main-content como filho da tag body;
🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
*/

//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let body = document.querySelector('body');
let h1 = document.createElement('h1');
body.appendChild(h1);
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';

//2. Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
body.appendChild(main);
main.className = 'main-content';

//3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section = document.createElement('section');
main.appendChild(section);
section.className = 'center-content';

//4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
section.appendChild(p);
p.innerHTML = 'Foguete não tem ré!';

//5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section2 = document.createElement('section');
main.appendChild(section2);
section2.className = 'left-content';

//6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section3 = document.createElement('section');
main.appendChild(section3);
section3.className = 'right-content';

//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img')
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
section2.appendChild(img);

//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let arrayList= ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
let ulList = document.createElement('ul');
section3.appendChild(ulList);

for (let i = 0; i < arrayList.length; i += 1) {
  let liItem = document.createElement('li');
  liItem.innerHTML = arrayList[i];
  ulList.appendChild(liItem)
}

//9. Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let i = 0; i < 3; i +=1) {
  let tagH3 = document.createElement('h3');
  main.appendChild(tagH3);
}



/* 
2ª PARTE

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
🚀 Adicione a classe title na tag h1 criada;
🚀 Adicione a classe description nas 3 tags h3 criadas;
🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
*/


