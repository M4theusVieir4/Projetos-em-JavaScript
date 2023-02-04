function removerPropriedade(objeto = {}, propriedade) {
    const newObjeto = objeto
    delete newObjeto[propriedade]
   
    return newObjeto
    
    
}
console.log(removerPropriedade({a: 1, b:2}, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))