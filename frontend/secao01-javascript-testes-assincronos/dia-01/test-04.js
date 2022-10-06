const imprimeResultado = (resultado) => {
  console.log(resultado);
};

const funcaoSoma = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma);
};

funcaoSoma(10, 8, imprimeResultado);
