//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function lerVetor(vetor = []){
    let par, impar
    par = 0
    impar = 0
    for(i in vetor){
        if(vetor[i] % 2 == 0){
            ++par
        } else{
            ++impar
        }
    }
    console.log(`Existe ${par} números pares e ${impar} números ímpares`)
}

let vetor = lerVetor([2,5,4,5,6,2,145,7,9])