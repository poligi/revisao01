/*
Um banco oferece empréstimos para seus clientes com base em sua renda 
mensal e histórico de crédito. Para determinar a elegibilidade de um 
cliente para um empréstimo bancário, as seguintes condições devem ser 
consideradas:

-Se a renda mensal for maior ou igual a R$ 2000 e não houver restrições 
de crédito, o cliente é elegível sem restrições.

-Se a renda mensal for maior ou igual a R$ 2000, mas houver restrições 
de crédito, o cliente é elegível, mas com restrições devido ao histórico de crédito.

-Se a renda mensal for inferior a R$ 2000 e não houver restrições de 
crédito, o cliente não é elegível devido à renda insuficiente.

-Se a renda mensal for inferior a R$ 2000 e houver restrições de crédito, 
o cliente não é elegível devido à renda insuficiente e ao histórico de crédito.

Escreva um programa que solicite a renda mensal e se há restrições de 
crédito para um cliente e determine sua elegibilidade para um empréstimo 
bancário, fornecendo feedback com base nas condições estabelecidas.
 */

let rendaMensal = parseFloat(prompt('Digite sua renda mensal:'))
let restricoes = confirm('Sua conta possui restrições de crédito?')

if (rendaMensal >= 2000 && restricoes === false) {
    document.write('Você é elegível para o empréstimo sem retrições!')
} else if (rendaMensal >= 2000 && restricoes === true) {
    document.write('Você é elegível para o empréstimo, mas com retrições devido ao histórico de crédito!')
} else if (rendaMensal < 2000 && restricoes === false) {
    document.write('Você não é elegível para o empréstimo devido à renda insuficiente!')
} else {
    document.write('Você não é elegível para o empréstimo devido à renda insuficiente e ao histórico de crédito!')
}

