/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/
function pA(n=1, a1=1, r=1){
    let aN = 0
    let lista = []
    let soma =0
    let i
    for(i=1; i<= n; i++){
        aN = a1 + (i - 1)*r        
        lista.push(aN)
    }
    soma = ((a1 + aN)*n)/2
    console.log(`Lista de termos P.A: ${lista}`)
    console.log(`Soma dos termos: ${soma}`)
}
pA(10, 5, 2)

function pG(n=1, a1=1, q=1){
    let aN = 0
    let lista = []
    let soma =0
    let i
    for(i=1; i<= n; i++){
        aN = a1*q**(i - 1)        
        lista.push(aN)
    }
    soma = (a1*(q**n -1))/(q - 1)
    console.log(`Lista de termos P.G: ${lista}`)
    console.log(`Soma dos termos: ${soma}`)
}
pG(10, 5, 2)