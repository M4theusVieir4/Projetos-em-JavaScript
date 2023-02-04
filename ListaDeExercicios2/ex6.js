function inverso(valor) {
    switch(valor){
        case true:
            return false
            break
        case false:
            return true
            break
        case 1:
            return -1
            break
        case -1:
            return 1
            break
        default:
            return "booleanos ou números esperado, mas o parâmetro é do tipo string"
    }
}
console.log(inverso("-1"))