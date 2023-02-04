/*const prod1 = {
    name: '...',
    preco: 45
}

const prod2 = {
    name: '...',
    preco: 1234
}*/
//Factory Simples
function criarPessoa() {
    return {
        name: 'Ana',
        sobrenome: 'Silva'
    }
}//factory é uma função que retorna um objeto

console.log(criarPessoa())
//Factory cria uma intância de um objeto
