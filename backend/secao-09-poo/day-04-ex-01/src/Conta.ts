import Email from "./Email";

type TipoDeConta = 'corrente' | 'poupanca';

export default abstract class Conta {
  private _id: number;
  protected _saldo: number;
  private _email: Email;
  private _tipo: TipoDeConta;

  constructor(id: number, s: number, email: string, tipo: TipoDeConta) {
    this._saldo = s;
    this._id = id;
    this._email = new Email(email);
    this._tipo = tipo;
  }

  get id(): number {
    return this._id;
  }

  get saldo(): number {
    return this._saldo;
  }

  get email(): string {
    return this._email.valor;
  }

  // set saldo(s: number) {
  //   this._saldo = s;
  // }

  // public debito(valor: number) {
  //   if(this._saldo < valor) {
  //     throw new Error('Saldo insuficiente');
  //   }
  //   this._saldo -= valor;
  // }

  abstract debito(valor: number): void;

};
