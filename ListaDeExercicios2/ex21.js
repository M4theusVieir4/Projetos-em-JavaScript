function funcaoDaSorte(num){
    const sorteado = Math.floor(Math.random() * 11)    
    return sorteado == num ? `Parabéns! O número sorteado foi o ${sorteado}` : `Que pena! O número sorteado foi o ${sorteado}`
}
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(7))