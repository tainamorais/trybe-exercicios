/*
Tranformar essa estrutura em classe
function sum(num1: number, num2: number) { console.log(num1 + num2) };
function sub(num1: number, num2: number) { console.log(num1 - num2) };
function div(num1: number, num2: number) { console.log(num1 / num2) };
function mul(num1: number, num2: number) { console.log(num1 * num2) };

Para saber resultado:
sum(2, 2);
sub(2, 2);
div(2, 2);
mul(2, 2);
*/

class Calculator {

  public num1;
  public num2;

  constructor(numero1: number, numero2: number) {
    this.num1 = numero1;
    this.num2 = numero2;
  }

  sum(){ return this.num1 + this.num2 }
  sub(){ return this.num1 - this.num2 }
  div(){ return this.num1 / this.num2 }
  mul(){ return this.num1 * this.num2 }
};

const calculator = new Calculator(2, 2);

calculator.sum();
calculator.sub();
calculator.div();
calculator.mul();
