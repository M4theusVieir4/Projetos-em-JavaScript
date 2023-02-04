function despesasTotais(arryProdutos = []){
    const precos = p => p.preco
    const soma = (acumulador, atual) => acumulador + atual
    const totalDespesas = arryProdutos.map(precos).reduce(soma)
    return totalDespesas
}
console.log(despesasTotais([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))
console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.99}
]))