/*
Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

A pessoa cliente deverá conter o nome;
*/

export default class Client {
  private _name = String();
  
  constructor(n: string) {
    this.name = n;
  }
    
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.')
    }
    this._name = value;
  }
}
