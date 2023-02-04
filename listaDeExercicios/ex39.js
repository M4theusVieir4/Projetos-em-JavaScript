/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar*/
function trocaVetor(vetorA=[], vetorB=[]){
    [vetorA, vetorB] = [vetorB, vetorA]
    console.log(`VetorA: ${vetorA}. VetorB: ${vetorB}`)
}
trocaVetor([1, 2, 3, 4], [10, 100, 80, 50])