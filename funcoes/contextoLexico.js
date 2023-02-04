const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
function exec() {
    const valor = 'Local'
    minhaFuncao()
}// pelo contexto léxico a função procura a variável no escopo global, a função carrega consigo o contexto


exec()