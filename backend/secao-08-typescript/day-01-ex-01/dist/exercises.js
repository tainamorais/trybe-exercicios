"use strict";
/*
01. Primeiro, desenvolveremos uma função para calcular a área de um quadrado.
A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado.
area = lado * lado
A = s²
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCirlceArea = exports.getTrapeziumArea = exports.getLosangleArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
;
/*
02. A segunda função calculará a área de um retângulo.
A fórmula para o cálculo é multiplicar a medida da base pela medida da altura.
area = base * altura
A = b * h
*/
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
;
/*
03. A terceira calculará a área de um triângulo.
A fórmula consiste em multiplicar a medida da base pela medida da altura e dividir o resultado pela metade.
area = (base * altura) / 2
A = (b * h) / 2
*/
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
;
/*
04. Já a quarta função, será responsável por calcular o perímetro de um polígono.
Um polígono é uma forma geométrica fechada que possui lados retos.
Por exemplo: triângulos, retângulos, quadrados, trapézios, hexágonos, entre outros.
A fórmula para o cálculo consiste em somar a medida de todos os lados.
perimetro = lado1 + lado2 + lado3...
P = a + b + c + d + e + f ...
*/
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
;
/*
05. Nossa última função será responsável por verificar se um triângulo é válido com base na medida de seus lados e deve retornar um valor booleano (true ou false). Para que um triângulo exista, um de seus lados deve ser maior que a diferença absoluta entre os outros dois e menor que a soma deles.
*/
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
;
// PARA FIXAR
/*
01. Crie uma nova função para calcular a área de um losango.
A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois.
area = (diagonalMaior * diagonalMenor) / 2
A = (D * d) / 2
*/
function getLosangleArea(D, d) {
    return (D * d) / 2;
}
exports.getLosangleArea = getLosangleArea;
;
/*
02. Crie uma nova função para calcular a área de um trapézio.
A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois.
A = [(B + b) * h] / 2
*/
function getTrapeziumArea(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.getTrapeziumArea = getTrapeziumArea;
;
/*
03. Crie uma nova função para calcular a área de um círculo.
A área do círculo de raio r é calculada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14).
A = ℼ * r².
Dica: você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI.
*/
function getCirlceArea(r) {
    return (Math.PI * (r ** 2));
}
exports.getCirlceArea = getCirlceArea;
;
