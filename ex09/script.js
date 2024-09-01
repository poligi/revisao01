/*
Escreva um programa que solicite ao usuário que insira o nome de uma 
forma geométrica (quadrado, triângulo ou retângulo) e calcule sua área. 
O programa deve utilizar a estrutura de controle switch case para 
identificar a forma geométrica inserida pelo usuário e calcular sua
área com base nas informações adicionais fornecidas.


-Se o usuário inserir "quadrado", o programa deve solicitar o comprimento 
do lado do quadrado e calcular sua área usando a fórmula: área = lado * lado.

-Se o usuário inserir "triângulo", o programa deve solicitar a base e a 
altura do triângulo e calcular sua área usando a fórmula: 
área = (base * altura) / 2.

-Se o usuário inserir "retângulo", o programa deve solicitar a base e a
altura do retângulo e calcular sua área usando a fórmula: 
área = base * altura
 */

let formaGeometrica = prompt("Digite o nome de uma forma geométrica:")
let area

switch (formaGeometrica) {
    case 'Quadrado':
        let ladoQuadrado = prompt("Digite o valor do comprimento do lado do quadrado")
        area = ladoQuadrado * ladoQuadrado
        break;
    case 'Triãngulo':
        let baseTriangulo = prompt("Digite o valor da base do triângulo:")
        let alturaTriangulo = prompt("Digite o valor da altura do triângulo:")
        area = (baseTriangulo * alturaTriangulo) / 2
        break;
    case 'Retângulo':
        let baseRetangulo = prompt("Digite o valor da base do retângulo:")
        let alturaRetangulo = prompt("Digite o valor da altura do retângulo:")
        area = baseRetangulo * alturaRetangulo
        break;
    default:
        area = "Forma Geométrica inválida"
}

document.write(`A área do ${formaGeometrica} é: ${area}.`)