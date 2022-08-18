const salario = 3000;
let salarioBase = 0;
let descontoIR = 0;

if (salario <= 1556.94) {
  salarioBase = salario - (salario * 0.08)
} else if (salario <= 2594.92) {
  salarioBase = salario - (salario * 0.09)
} else if (salario <= 5189.82) {
  salarioBase = salario - (salario * 0.11)
} else if (salario > 5189.82) {
  salarioBase = salario - 570.88
}

console.log(`Salário = R$ ${salario}.`);
console.log(`Salário base = R$ ${salarioBase}.`);

if (salarioBase <= 1903.98) {
  descontoIR = 0;
} else if (salarioBase <= 2826.65) {
  descontoIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  descontoIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  descontoIR = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
  descontoIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - descontoIR;

console.log(`Desconto IR: R$ ${descontoIR}.`);
console.log(`Salário líquido: R$ ${salarioLiquido});
