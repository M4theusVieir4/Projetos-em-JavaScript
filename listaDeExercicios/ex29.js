/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/
function lerVetor(vetor = []) {
    let intervalo = 0
    let foraIntervalo = 0
    for(i in vetor) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            ++intervalo
        }else{
            ++foraIntervalo
        }
    }
    console.log(`Números de valores no intervalo entre [10,20] : ${intervalo}`)
    console.log(`Números de valores fora do intervalo entre [10,20] : ${foraIntervalo}`)
}
lerVetor([5, 6, 7, 8, 9, 10, 11, 12, 45, 100])