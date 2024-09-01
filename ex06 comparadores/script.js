/*Escreva um programa que verifique se um número fornecido pelo 
usuário se adequa as seguintes situações, mas sem usar estruturas 
condicionais (if, else, switch, etc.). Apenas utilize operadores de 
comparação para realizar a verificação.

Para cada item, crie uma variável que realize a comparação e imprima 
o resultado dessa variável no console.

a-) Se o número é par ; 
b-)  Se o número é ímpar ; 
c-) Se o número é maior que 10 ; 
d-) Se o número é maior ou  igual a 10 ;
e-) Se o número é menor que 10 ; 
f-) Se o número é menor ou  igual a 10 ;
 */

let numero = prompt('Digite um número inteiro e positivo:')

let par = numero % 2 === 0
let impar = numero % 2 !== 0
let maiorQue = numero > 10
let maiorOuIgual = numero >= 10
let menorQue = numero < 10
let menorOuIgual = numero <= 10;

document.write(`O número ${par} é par.`)
document.write(`O número ${impar} é impar.`)
document.write(`O número ${maiorQue} é maior que 10.`)
document.write(`O número ${maiorOuIgual} é maior ou igual a 10.`)
document.write(`O número ${menorQue} é menor que 10.`)
document.write(`O número ${menorOuIgual} é menor ou igual a 10.`)
