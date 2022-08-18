//Situações da candidata: aprovada, lista, reprovada.
let candidate = 'aprovada';

switch (candidate) {
  case 'aprovada':
    console.log('Parabéns, você passou em nosso processo seletivo!');
    break;
  case 'lista':
    console.log('Você está em nossa lista de espera para a próxima turma.');
    break;
  case 'reprovada':
    console.log('Que pena, não foi dessa vez... Continue tentando.');
    break;
  default:
    console.log('Não se aplica');
}