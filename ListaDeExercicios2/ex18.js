function calcularMedia(valores = []){
    const somar = (acumulador, atual) => acumulador + atual
    const soma = valores.reduce(somar)
    const media = soma/valores.length
    return media
}
console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))