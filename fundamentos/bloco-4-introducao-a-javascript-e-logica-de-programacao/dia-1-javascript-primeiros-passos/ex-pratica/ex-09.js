const n1 = 4;
const n2 = 2;
const n3 = 9;

const avaliaN1 = n1 % 2 !== 0;
const avaliaN2 = n2 % 2 !== 0;
const avaliaN3 = n3 % 2 !== 0;

let isOdd = false;

if (avaliaN1 || avaliaN2 || avaliaN3) {
  isOdd = true;
};

console.log(isOdd);
