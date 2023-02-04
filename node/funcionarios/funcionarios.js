const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

function filtarChinesaMenorSalario(pessoas){
    const pessoa = p => p
    const chinesas = chinesa => {
        if(chinesa.pais == "China" && chinesa.genero == "F"){
            return chinesa
        }
    }
    const Chinesas = pessoas.map(pessoa).filter(chinesas)
    const ChinesasOrdenadas = Chinesas.sort((chinesaA, chinesaB) => chinesaA.salario - chinesaB.salario)    
    const chinesaMenorSalario = ChinesasOrdenadas[0]
    return chinesaMenorSalario

    
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(filtarChinesaMenorSalario(funcionarios))

})