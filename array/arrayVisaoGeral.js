// Array é um objeto especial no javascript
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bla', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bla', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Matheus')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()//altera o array original
console.log(aprovados)
delete aprovados[1]// não altera os valores nos índices
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')//começa no primeiro índice e depois exclui dois elementos, e adciona os dois elementos no final
console.log(aprovados)