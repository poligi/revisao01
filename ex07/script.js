/*
Um banco oferece empréstimos para seus clientes com base em sua 
renda mensal e histórico de crédito. Para ser aprovado para um 
empréstimo, um cliente precisa atender aos seguintes critérios:

Ter uma renda mensal igual ou superior a R$ 2000,00.
Não possuir restrições em seu histórico de crédito.

Escreva um programa que solicite a renda mensal de um cliente e 
verifique se ele é elegível para um empréstimo bancário.
 */

let rendaMensal = parseFloat(prompt('Digite sua renda mensal:'))
if (rendaMensal >= 2000) {
       document.write('Você é elegível para um empréstimo!')
} else {
       document.write('Você não é elegível para o empréstimo!')
}