const valorCusto = 1;
const valorVenda = 3;
const totalVendas = 1000;
const valorCustoTotal = valorCusto * 1.2;
const valorLucro = valorVenda - valorCustoTotal;
const lucroTotal = valorLucro * totalVendas;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Valor inválido. Este programa será encerrado.');
} else {
  console.log(`O lucro total foi de R$ ${lucroTotal}.`);
};
