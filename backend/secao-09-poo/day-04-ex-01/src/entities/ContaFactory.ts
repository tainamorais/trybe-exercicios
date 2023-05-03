import Conta from "../Conta";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

export default class ContaFactory {
  static create(
    id: number,
    saldo: number,
    email: string,
    tipo: string,
  ): Conta{
    if(tipo === 'corrente') {
      return new ContaCorrente(id, saldo, email, tipo);
    }

    if(tipo === 'poupanca') {
      return new ContaPoupanca(id, saldo, email, tipo);
    }

    throw new Error('Tipo de conta inválido')
  }
}