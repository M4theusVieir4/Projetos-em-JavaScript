function criarProduto (name, cost, desconto = 0.1){
    return {
        nome: `${name}`,
        preco: cost,
        desconto
    }
}
const produto1 = new criarProduto('Iphone', 3000)
const produto2 = new criarProduto('Sansung', 5000)
console.log(produto2)
console.log(produto1)
console.log(criarProduto('Matheus', 2000))