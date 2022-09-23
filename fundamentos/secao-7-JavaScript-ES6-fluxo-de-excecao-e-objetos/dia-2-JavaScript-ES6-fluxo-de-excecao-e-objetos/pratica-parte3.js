const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 
Crie uma função para adicionar o turno da noite na lesson2.
Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/
const adicionarTurno = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

console.log(adicionarTurno(lesson2, 'turno', 'noite'))

/* 
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/
const listObjectKeys = (obj) => Object.keys(obj);
console.log(listObjectKeys(lesson1));

/* 
Crie uma função para mostrar o tamanho de um objeto.
*/
const sizeObject = (obj) => Object.keys(obj).length;
console.log(sizeObject(lesson1));

/* 
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
*/
const listObjectValues = (obj) => Object.values(obj);
console.log(listObjectValues(lesson3));

/* 
Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
*/
const allLessons = {} = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

/* 
Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
*/
const getNumberOfStudents = (obj) => {
  let total = 0;

  const array = Object.keys(obj);
    
  for (index in array) {
    total += obj[array[index]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  return total; // a função retorna o total de alunos após as iterações do "for/in"
};
console.log(getNumberOfStudents(allLessons));

//2ª versão
function getStudentsTotal(lessons) {  //qualquer valor
  const keys = Object.keys(lessons);
  counter = 0;
  for (index in keys) {
    counter += allLessons[keys[index]].numeroEstudantes
  }
  return counter;
}

console.log(getStudentsTotal(allLessons))

/*
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
*/
const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 0));


/*
Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
console.log(verifyPair(lesson3, 'turno', 'noite'));
-- Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
-- Output: false
*/
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));


/* 
Utilizando o objeto (allLesson), Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
*/
console.log('Questão bônus 1');
const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if (obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));


/* 
Utilizando o objeto (allLesson), Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
*/
console.log('Questão bônus 1');
const createReport = (obj, nome) => {
  const report = {};
  report['professor'] = nome;

  const aulas = [];
  let estudantes = 0;
  const arr = Object.keys(allLessons);
  for (let index in arr) {
    if (obj[arr[index]].professor === nome) {
      aulas.push(obj[arr[index]].materia)
      estudantes += obj[arr[index]].numeroEstudantes
    }
    report['aulas'] = aulas;
    report['estudantes'] = estudantes;
  }

  return report;
}
console.log(createReport(allLessons, 'Maria Clara'))