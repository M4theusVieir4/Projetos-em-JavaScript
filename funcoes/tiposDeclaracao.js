console.log(soma(3, 4))// O interpretador do javascript primeiro carrega as funções e depois executa o código
//console.log(mult(3, 4))
//console.log(sub(3, 4))
//agora fuction expressed o interpretador não carrega antes nem a named function expression
// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) {
    return x * y
}//vatagem caso de um erro ele mostra o nome da função

