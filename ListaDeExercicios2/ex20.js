function menorNumero(numeros = []) {
    const menorNumero = (anterior, atual) => atual < anterior? atual : anterior
    const menor = numeros.reduce(menorNumero)
    return menor
}
console.log(menorNumero([5, 10, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))