function estaEntre(num, min, max, inclusivo = false){
    if((num > min && num < max) || (inclusivo == true && num >= min && num <= max)){
        return true
    }else {
        return false
    }
}
console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))