/*
Exercício 2
Vamos agora utilizar a classe Car que criamos no exercício anterior. Uma pessoa motorista de aplicativo fará uma viagem para pegar sua nova pessoa passageira. Ela então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:

Siga em frente;
Em 600 metros vire a esquerda;
Vire a esquerda;
Em 200 metros na rotatória pegue a segunda saída a direita;
Mantenha em frente pelos próximos 1,2 quilômetros;
Em 300 metros vire a direita;
Vire a direita;
Em 400 metros você chegará ao seu destino;
Você chegou ao seu destino.
Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.

Siga em frente;
Em 300 metros vire a direita;
Vire a direita;
Mantenha em frente pelos próximos 2 quilômetros;
Em 200 metros vire a esquerda;
Vire a esquerda;
Em 400 metros vire a direita;
Vire a direita;
Em 100 metros você chegará ao destino.
Você chegou ao destino.
A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.

Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.
*/

// ./index.ts

import Car from "./Car";

const gol = new Car("Volkswagen", "prata", 4);

// gol.openTheDoor(doors.DRIVER);
// gol.closeTheDoor(doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();

// ./index.ts

import PizzaVegetarian from "./PizzaVegetarian";
import PizzaCommon from "./PizzaCommon";
import PizzaSugar from "./PizzaSugar";

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);

/*
Exercício 5
Em JavaScript, temos a High Order Function filter. Ela funciona da seguinte forma:

Recebe como primeiro parâmetro um array que pode ser de qualquer tipo;
Recebe como segundo parâmetro uma função de callback;
Retorna um novo array removendo os itens que não atendem a condição da função de callback;
A função de callback recebe como primeiro parâmetro um item do tipo do array;
A função de callback pode receber como segundo parâmetro um index do tipo inteiro;
A função de callback pode receber como terceiro parâmetro o próprio array;
A função de callback devolve um booleano.
Usando generics e os demais conceitos aprendidos em TypeScript, recrie a função filter e nomeie-a como myFilter.


*/

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));