/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
function diaUtil (dia) {
    switch(dia) {
        case 1:
            console.log(`Domingo é fim de semana`)
            break
        case 2:
            console.log(`Segunda é dia útil`)
            break
        case 3:
            console.log(`Terça é dia útil`)
            break
        case 4:
            console.log(`Quarta é dia útil`)
            break
        case 5:
            console.log(`Quinta é dia útil`)
            break
        case 6:
            console.log(`Sexta é dia útil`)
            break
        case 7:
            console.log(`Sábado é fim de semana`)
            break
        default:
            console.log('Dia inválido')
    }
}

diaUtil(5)
diaUtil(9)
diaUtil(7)