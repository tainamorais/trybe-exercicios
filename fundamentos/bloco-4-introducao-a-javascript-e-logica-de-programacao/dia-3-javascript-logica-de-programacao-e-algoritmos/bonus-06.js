let numero = 13;
let divisores = 1;

for (let i = 2; i <= numero; i += 1) {
  if (numero % i === 0) {
    divisores += 1;
  };
};

if (divisores === 2) {
  console.log('É primo.');
} else {
  console.log('Não é primo.')
}