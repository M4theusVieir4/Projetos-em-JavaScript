function segundoMaior(numeros = []){
    let segundoMaior = 0
    let maior = 0  
    let indice
    for(let i = 0; i < numeros.length; i++){
        if(i == 0 || maior < numeros[i]){
            maior = numeros[i]
            indice = i
           }         
    }
    numeros.splice(indice, 1)
    for(let i = 0; i < numeros.length; i++){
        if(i == 0 || segundoMaior < numeros[i]){
            segundoMaior = numeros[i]            
           }         
    }
    return segundoMaior
    
}
console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))