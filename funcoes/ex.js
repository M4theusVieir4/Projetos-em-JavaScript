function criarPessoa(nome, sobrenome, idade, cpf) {
    return {
        nome,
        sobrenome,
        idade,
        cpf,
        mensagem() {
            return `Oi eu sou ${nome}${sobrenome}, tenho ${idade} e meu cpf é: ${cpf}`
            
        } 
    }
}

let p1 = criarPessoa('Matheus', 'Vieira Lopes de Souza', 20, 78924274)
console.log(p1.mensagem())

function construirPessoa(nome, sobrenome, idade, cpf) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.cpf = cpf

    this.mensagem = function () {//Para transformar essa função diretamente na instância criada 
        console.log(`Oi eu sou ${this.nome}${this.sobrenome}, tenho ${this.idade} e meu cpf é: ${this.cpf}`)
    }
}



const p2 = new construirPessoa('Matheus', 'Vieira Lopes de Souza', 20, 78924274)
p2.mensagem()

class Pessoa {
    constructor(nome, sobrenome, idade, cpf){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.cpf = cpf
    }

    mensagem () {
        console.log(`Oi eu sou ${this.nome}${this.sobrenome}, tenho ${this.idade} e meu cpf é: ${this.cpf}`)
    }
}

const p3 = new Pessoa('Matheus', 'Vieira Lopes de Souza', 20, 78924274)
p3.mensagem()