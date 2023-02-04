/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/
function concatenarVetores (vetorInteiro = [], vetorString = [], vetorDouble = []) {
    let resultado = vetorInteiro.concat(vetorString, vetorDouble)
    console.log(resultado)
}
concatenarVetores([1, 2, 3, 4], ['a', 'b', 'c', 'd'], [0.555, 0.777, 0.8888, 0.2])