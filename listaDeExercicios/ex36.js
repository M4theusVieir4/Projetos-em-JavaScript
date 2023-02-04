/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/
function multiplicarVetor1(vetor = [], num=1) {
    let resultado = []
    for(let i in vetor){
        resultado.push(vetor[i] * num)
    }
    console.log(resultado)
}
multiplicarVetor1([10, 5, 7, 8, 9], 10)

function multiplicarVetor2(array=[], num=1){
    let resultado = []
    for(let i in array){
        if(array[i] > 5){
            resultado.push(array[i] * num)
        }

    }
    console.log(resultado)
}

multiplicarVetor2([1, 2, 3, 7, 8, 5, 6], 100)