/*12) Faça um algoritmo que calcule o fatorial de um número.
*/
function fatorial (num) {
    let acumulador = 1
    for(i = 1; i <= num; i++){
        acumulador *= i
        
    }
    console.log(acumulador)
    
}
fatorial(5)
