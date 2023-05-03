import Conta from "../Conta";

export default class ContaPoupanca extends Conta {
  debito(valor: number): void {
    if(valor > this.saldo) {
      throw new Error('Saldo insuficiente')
    }

    this._saldo -= valor;
  }
}