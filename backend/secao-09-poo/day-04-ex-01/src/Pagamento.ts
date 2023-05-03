import Conta from "./Conta";
// gerar UUID
import crypto from 'node:crypto'
import { IEfetivavel } from "./IEfetivavel";

// Ela não pode ser inicializada, serve para criar seus tipos apenas
// Pagamento é abstrato e não concreto, não foi feito para ser instanciado.
export default abstract class Pagamento implements IEfetivavel {
  private _conta: Conta;
  protected _valor: number;
  private _descricao: string;
  private static valorMinimo = 0;

  abstract efetivar(): void;

  constructor(
    conta: Conta,
    valor: number,
    descricao: string
  ) {
    Pagamento.validateValue(valor);

    this._conta = conta;
    this._valor = valor;
    this._descricao = descricao;
  }

  set valor(v: number) {
    Pagamento.validateValue(v);
    this._valor = v;
  }

  get valor() {
    return this._valor;
  }

  get descricao() {
    return this._descricao;
  }

  set descricao(d: string) {
    this._descricao = d;
  }

  get conta() {
    return this._conta;
  }

  // protected para ser usado em pagamento boleto e demais derivados
  protected gerarCodigo(): string {
    const timestamp = new Date().getTime();
    const uuid = crypto.randomUUID();
    // substitui todos os espaços por traõs
    const slug = this.descricao.toLocaleLowerCase().replace(/ /g, '-');
    return `${timestamp}-${uuid}-${slug}`
  }

  // static pois não usa this em momento algum
  private static validateValue(valor: number) {
    if (valor <= Pagamento.valorMinimo) {
      throw new Error('Valor inválido')
    }
  }
};
