let peca = 'RAInha';
let pecaMinuscula = peca.toLowerCase();

switch (pecaMinuscula) {
  case 'rei':
    console.log('Rei: Se move apenas uma casa em qualquer direção.');
    break;
  case 'rainha':
    console.log('Rainha: Se move na horizontal, vertical e diagonal.');
    break;
  case 'peão':
    console.log('Se move apenas uma casa para frente. Na 1ª saída, pode andar 2 casas.');
    break;
  case 'bispo':
    console.log('Bispo: Se move em diagonais.');
    break;
  case 'torre':
    console.log('Torre: Se move na horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo: Se move em L.');
    break;
}