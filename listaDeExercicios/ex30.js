//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
function maiorMenorValor(vetor) {
    let maior, menor
    for(i in vetor) {
        if(i == 0 ){
            maior = vetor[i]
            menor = vetor[i]
        }else if(maior < vetor[i]) {
            maior = vetor[i]
        }else if(menor > vetor[i]) {
            menor = vetor[i]
        }
    }
    console.log(`O maior valor do vetor é ${maior} e o menor é ${menor}`)
}
maiorMenorValor([3, 5, 8,7, 8, 1])