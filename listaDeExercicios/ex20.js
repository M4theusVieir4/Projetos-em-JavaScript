/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/
function pagandoComCedulas(valor) {
    let nota100, nota50, nota10, nota5, nota1
     nota100 = 0
     nota50 = 0
     nota10 = 0
     nota5 = 0
     nota1 = 0
    
    while(valor >= 100) {
        valor -= 100
        ++nota100
    }
    while(valor >= 50) {
        valor -= 50
        ++nota50
    }
    while(valor >= 10) {
        valor -= 10
        ++nota10
    }
    while(valor >= 5) {
        valor -= 5
        ++nota5
    }
    while(valor >= 1) {
        valor -= 1
        ++nota1
    }
    console.log(nota100 != 0 ? `${nota100} nota(s) de R$ 100.` : ``,nota50 != 0 ? `${nota50} nota(s) de R$ 50.` : ``,
    nota10 != 0 ?` ${nota10} nota(s) de R$ 10.` : ``, nota5 != 0 ? ` ${nota5} nota(s) de R$ 5.` : ``,
    nota1 != 0 ? `${nota1} nota(s) de R$ 1. ` : ``)
}
pagandoComCedulas(200)
pagandoComCedulas(1053)
pagandoComCedulas(15)
pagandoComCedulas(12)