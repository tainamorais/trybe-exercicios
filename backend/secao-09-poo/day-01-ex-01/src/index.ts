import Conta from "./Conta";
import Pagamento from "./Pagamento";

const contaTai = new Conta(5000);

try {
  contaTai.debito(9000);
} catch (error) {
  console.log(String(error))
}

const amanha = new Date();
amanha.setDate(amanha.getDate() + 1)

const pagamento = new Pagamento(contaTai, 400, amanha, 'cartao');

pagamento.pagar();

console.log(contaTai.saldo);
