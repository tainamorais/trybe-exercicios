/*
Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
*/

export default class OrderItem {
  private _name = String();
  private _price = Number();
  
  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome do pedido deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }
  
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser um número positivo.');
    }

    this._price = value;
  }
  
}