const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(){
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))       

    })
}
lerArquivo().then(arquivo => console.log(arquivo))