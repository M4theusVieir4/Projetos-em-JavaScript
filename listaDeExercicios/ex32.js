//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
function mediaAritmetica(vetor = []) {
    let soma = 0
    for(i in vetor) {
        soma += vetor[i]
    }
    let media = soma/vetor.length
    console.log(`A média aritmética do vetor é ${media}`)
}
mediaAritmetica([10, 40, 50, 60, 90, 1000])