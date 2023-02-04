const { reject } = require("lodash");

function funcionariosOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionariosOuNao('Testando...', 0.9)
    .then(v => console.log(v))
    .catch(err => console.log(`Erro:${err}`))