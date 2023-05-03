import PagamentoPix from "../PagamentoPix";
import { IPagamentoPixModel } from "./PagamentoPixModel";

export default class PagamentoPixModelFake implements IPagamentoPixModel {
  pagamentos: PagamentoPix[] = [];

  async save(pagamentoPix: PagamentoPix): Promise<void> {
    this.pagamentos.push(pagamentoPix);
  }
}