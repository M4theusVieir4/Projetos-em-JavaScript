const pilotos = ['Vetel', 'Aloso', 'Raikkonen', 'Massa']
pilotos.pop() //massa saiu do array, remove o último elemento
console.log(pilotos)

pilotos.push('Vertappen')

pilotos.shift()//remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')//adciona na primeira posição
console.log(pilotos)

//splice pode adcionar e remover elementos
//adcionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)//massa sai
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array gerado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)