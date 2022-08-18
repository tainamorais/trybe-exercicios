const n1 = 9;
const n2 = 7;
const n3 = 22;

const avaliaN1 = n1 % 2 === 0;
const avaliaN2 = n2 % 2 === 0;
const avaliaN3 = n3 % 2 === 0;

let isEven = false;

if (avaliaN1 || avaliaN2 || avaliaN3) {
  isEven = true;
};

console.log(isEven);
