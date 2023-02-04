/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/
function compararStrings(vetorA = [], vetorB = []) {
    if(vetorA.toString().toUpperCase() == vetorB.toString().toUpperCase()){
        return true
    }else{
        return false
    }
}
let resultado = compararStrings(['Matheus'], ['Joao'])
console.log(resultado)
