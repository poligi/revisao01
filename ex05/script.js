/*
Agora a pessoa precisou retirar 10% do valor em conta para pagar 
o imposto de Renda. Faça o programa que pergunte a porcentagem que 
deverá ser retirado em conta e atualize o saldo, retirando o valor 
retirado e informe o valor da conta atual . 
*/

let saldoDaConta = 100
let desconto = parseFloat(prompt('Digite a porcentagem que deverá ser retirado em conta:'))
let calculo =  saldoDaConta * (desconto / 100)
let saldoAtual = (saldoDaConta) - (calculo)

document.write(`Saldo anterior: ${saldoDaConta},00 <br>`)
document.write(`Seu saldo atual é de: ${saldoAtual},00`)