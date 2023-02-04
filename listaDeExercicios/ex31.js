/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/
function contadorNgeativos (vetor = []) {
    let negativo = 0
    for(i in vetor) {
        if(vetor[i] < 0){
            ++negativo
        }
    }
    console.log(`Nesse vetor ${negativo} são números negativos`)
}
contadorNgeativos([-1, -2, -5, 7, 8, 9, 10])