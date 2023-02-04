require('./global')

console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Eita!'//não mudou pq utilizei a função freeze
console.log(MinhaApp.nome)