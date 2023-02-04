/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/
function ehDivisilPor3(num) {
    if(num % 3 == 0) {
        return true
    } else return false
}

let numero = ehDivisilPor3(9)
console.log(numero)
console.log(ehDivisilPor3(5))