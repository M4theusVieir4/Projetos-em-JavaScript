/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/
function numeroPorExtenso (num) {
    switch(num) {
        case 1:
            console.log(`${num} - um`)
            break
        case 2:
            console.log(`${num} - dois`)
            break
        case 3:
            console.log(`${num} - três`)
            break
        case 4:
            console.log(`${num} - quatro`)
            break
        case 5:
            console.log(`${num} - cinco`)
            break
        case 6:
            console.log(`${num} - seis`)
            break
        case 7:
            console.log(`${num} - sete`)
            break
        case 8:
            console.log(`${num} - oito`)
            break
        case 9:
            console.log(`${num} - nove`)
            break
        case 10:
            console.log(`${num} - dez`)
            break
        default:
            console.log("Número fora do intervalo.")
    }
}
numeroPorExtenso(1)
numeroPorExtenso(2)
numeroPorExtenso(3)
numeroPorExtenso(6)
numeroPorExtenso(7)
numeroPorExtenso(8)
numeroPorExtenso(9)
numeroPorExtenso(10)
numeroPorExtenso(11)