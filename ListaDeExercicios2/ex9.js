function repetir(repetira, vezes) {
    const array = []
    for(let i = 0; i < vezes; i++){
        array.push(repetira)
    }
    return array
}
console.log(repetir("código", 2))
console.log(repetir(7, 3))