/*
Imagine que você está desenvolvendo um sistema bancário. 
Escreva um programa que simule uma transação de depósito em uma conta 
bancária. O programa deve solicitar ao usuário que insira o valor do 
depósito e atualizar o saldo da conta bancária com esse valor
 */

let saldoDaConta = 0
let deposito = parseFloat(prompt('Digite quanto você deseja depositar:'))
let total = saldoDaConta + deposito

document.write(`Seu saldo atual é de: ${total},00`)