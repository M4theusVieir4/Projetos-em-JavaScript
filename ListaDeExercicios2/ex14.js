function objetoParaArray(objeto = {}){
    let array = []
    array.push(objeto)
    let newArray = array.map(function(obj){
        return Object.keys(obj).map(function(key){
            return obj[key]
        })
    })
    return newArray
}
console.log(objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}))
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))