const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro',preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function (p) {
    return p.preco > 500 && p.fragil
}))//não modifica o array atual
//produto caro
const produtoCaro = pc => pc.preco > 500
const produtoFragil = pc => pc.fragil
const resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado) 