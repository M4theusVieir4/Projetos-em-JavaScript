/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
function divisaoComResto(dividendo, divisor) {
    console.log(`A divisão entre ${dividendo} / ${divisor} = ${dividendo / divisor} .`)
    console.log(`O resto da divisão de ${dividendo} / ${divisor} = ${dividendo % divisor} .`)
}

let resultado = divisaoComResto(10, 2)
