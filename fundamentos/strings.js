const escola = 'Cod3r'

console.log(escola.charAt(4)) // printa o char no índice selecionado
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // printa o código asc do char no índice selecionado
console.log(escola.indexOf('3'))// print em qual posção está o char selecionado

console.log(escola.substring(1)) // printa cortando uma parte da string
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!"))//junta strings
console.log(escola.replace(3, 'e'))//substitui um caracter da string
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(','))// dividi a string por ','