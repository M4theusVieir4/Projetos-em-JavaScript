//Object.preventExtensions não deixa aumentar quantidade de atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal só consegue modificar os atributos, nem deletar nem aumentar

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:' ,Object.isSealed(pessoa))
pessoa.carro = 'ferrari'
delete pessoa.nome
pessoa.nome = 'Matheus'
console.log(pessoa)

//Object.freeze = selado + variaveis constantes


