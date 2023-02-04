//sem promisse
const http = require('http')
const { reject, get } = require('lodash')

function getTurma(letra) {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Objetivo simplificar o uso das promisses...
let obterAlunos = async () => {
    let ta = await getTurma('A')
    let tb = await getTurma('B')
    let tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}//retorna objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))