let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 45;
let somaAngulos = angulo1 + angulo2 + angulo3;
let triangulo = 180;

if (angulo1 >= 0 && angulo2 >= 0 && angulo3 >= 0) {
  if (somaAngulos === triangulo) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Verifique os ângulos. Todos devem possui valor positivo.');
};

