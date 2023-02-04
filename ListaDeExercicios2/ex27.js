function filtrarPorQuantidadeDigitos(array, quantidadeDigitoDesejada){
    const digitosAceitados = (num) => {        
       const quantidadeDeDigitos = String(num).length
       if(quantidadeDeDigitos == quantidadeDigitoDesejada){
            return num
       }
    }
    return array.filter(digitosAceitados)
}
console.log(filtrarPorQuantidadeDigitos([38, 2, 365, 18, 125, 11], 2))
console.log(filtrarPorQuantidadeDigitos([5, 9, 1, 125, 11], 1))