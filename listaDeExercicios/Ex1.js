/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/
function operacoesBasicas (a = 1, b = 1) {    
    console.log(`A soma de ${a} + ${b} = ${a + b}`)
    console.log(`A subtração de ${a} + ${b} = ${a - b}`)
    console.log(`A multiplicação de ${a} + ${b} = ${a * b}`)
    console.log(`A divisão de ${a} + ${b} = ${a / b}`)
}
operacoesBasicas(5, 10)
