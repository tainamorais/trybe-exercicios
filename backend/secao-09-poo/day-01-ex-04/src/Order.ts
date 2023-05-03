/*
Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.
*/

import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;
  
  constructor(c: Client, i: OrderItem[], p: string, d: number) {
    this._client = c;
    this._items = i;
    this._paymentMethod = p;
    this._discount = d;
  }
  
  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._discount = value;
  }

    /*
    EXERCÍCIO 4
    Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.
    */
    calculateOrder(): number {
      return this.items
      .reduce((previousValue, item) => {
        const total = previousValue + item.price;
        return total;
      }, 0);
    }

    calculateOrderWithDiscount(): number {
      const totalOrderValue = this.calculateOrder();
      return totalOrderValue - (totalOrderValue * this.discount);
    }
}