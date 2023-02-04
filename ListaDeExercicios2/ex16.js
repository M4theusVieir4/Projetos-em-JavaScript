function somarNumeros(arrayNumeros = []){
    const soma = arrayNumeros.reduce(function(acumulador, atual){
        return acumulador + atual
    }) 
    return soma
}
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))