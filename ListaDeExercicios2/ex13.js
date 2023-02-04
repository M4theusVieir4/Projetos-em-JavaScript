function filtrarNumeros(array = []){
    let soNumeros = e => typeof e === "number"
    const newArray = array.filter(soNumeros)   
    return newArray
    
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))