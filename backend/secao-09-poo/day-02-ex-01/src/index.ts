import Conta from "./Conta";
import { IEfetivavel } from "./IEfetivavel";
import Pagamento from "./Pagamento";
import PagamentoBoleto from "./PagamentoBoleto";
import PagamentoCartao from "./PagamentoCartao";

const contaTai = new Conta(5000, 'cida@faria.com');

// console.log(faturaCartao);
// console.log(contaTai.saldo);

const faturaCartao = new PagamentoCartao(contaTai, 1000, 'Fatura do cartão');
// faturaCartao.efetivar();

const ps2 = new PagamentoBoleto(new Date('2023-05-27'), contaTai, 500, 'PS2 na Internet');
// ps2.efetivarPagamento();

function efetivarPagamentosSelecionados(pagamentos: IEfetivavel[]) {
  pagamentos.forEach((pagamento) => pagamento.efetivar());
}

console.log(contaTai.saldo);
efetivarPagamentosSelecionados([faturaCartao, ps2])
console.log(contaTai.saldo);
