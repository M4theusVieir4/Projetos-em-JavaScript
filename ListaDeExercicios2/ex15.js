function receberSomenteOsParesDeIndicesPares(array = []){
    const pares = array.filter(function(num, i){
        const numeroPar = num % 2 === 0
        const indicePar = i % 2 === 0

        return numeroPar && indicePar
    })
    return pares
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
