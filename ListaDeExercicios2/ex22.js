function contarPalavras(string = []){
    let contadorString = 1
    for(let i = 0; i< string.length; i++){
        if(string[i] == " "){
            ++contadorString
        }
    }
    return contadorString
}
console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))