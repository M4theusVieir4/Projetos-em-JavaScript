let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana','Bia', 'Carlos' ])
})

p.then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))