import Conta from "./Conta";
import { IEfetivavel } from "./IEfetivavel";
import PagamentoBoleto from "./PagamentoBoleto";
import PagamentoCartao from "./PagamentoCartao";
import PagamentoPix from "./PagamentoPix";
import Transferencia from "./Transferencia";

const contaTai = new Conta(5000, 'cida@faria.com');

// console.log(faturaCartao);
// console.log(contaTai.saldo);

const faturaCartao = new PagamentoCartao(contaTai, 1000, 'Fatura do cartão');
// faturaCartao.efetivar();

const ps2 = new PagamentoBoleto(new Date('2023-05-27'), contaTai, 500, 'PS2 na Internet');
// ps2.efetivarPagamento();

const coxinha = new PagamentoPix('chave@pix.com', contaTai, 5, 'Coxinha deliciosa');

const transferencia = new Transferencia('Cida', 'Tainá');

function efetivarSelecionados(efetivaveis: IEfetivavel[]) {
  efetivaveis.forEach((efetivavel) => efetivavel.efetivar());
}

console.log(contaTai.saldo);
efetivarSelecionados([faturaCartao, ps2, coxinha, transferencia])
console.log(contaTai.saldo);
