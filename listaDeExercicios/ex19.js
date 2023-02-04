/*19) O cardápio de uma lanchonete é o seguinte:
Código      Descrição do Produto        Preço
100             Cachorro Quente         R$ 3,00
200             Hambúrguer Simples      R$ 4,00
300             Cheeseburguer           R$ 5,50
400             Bauru                   R$ 7,50
500             Refrigerante            R$ 3,50
600             Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/
function pagarLanches(codigo, quantidade) {
    switch(codigo) {
        case 100:
            console.log(`${quantidade} Cachorros Quentes custa R$${3 * quantidade}`)
            break
        case 200:
            console.log(`${quantidade} Hambúrguer Simples custa R$${4 * quantidade}`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer custa R$${5.5 * quantidade}`)
            break
        case 400:
            console.log(`${quantidade} Bauru custa R$${7.5 * quantidade}`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante custa R$${3.5 * quantidade}`)
            break
        case 600:
            console.log(`${quantidade} Suco custa R$${2.8 * quantidade}`)
            break
        default:
            console.log("Produto não existe")
    }
}

pagarLanches(100, 5)
pagarLanches(200, 5)
pagarLanches(300, 5)
pagarLanches(400, 5)
pagarLanches(500, 5)
pagarLanches(600, 5)
pagarLanches(700, 5)