/*6) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
        let juros = capitalInicial * taxaJuros * tempoAplicacao
        let montante = capitalInicial + juros
        return montante
}
let cliente1 = jurosSimples(1000, 0.5, 10)
console.log(cliente1)

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let montante = capitalInicial*(1 + taxaJuros)**tempoAplicacao
    return montante
}
let cliente2 = jurosCompostos(1000, 0.5, 10)
console.log(cliente2)
