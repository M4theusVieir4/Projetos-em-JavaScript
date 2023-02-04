/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

function sistemaAprovacao (nota) {
    if (nota < 38) {
        console.log(`Sua nota foi ${nota} abaixo de 40 logo está reprovado.`)
    } else{
        if(nota >= 38 && nota <= 40 ) {
            nota = 40
        } 
        else if(nota >= 43 && nota <= 45 ) {
            nota = 45
        } 
        else if(nota >= 48 && nota <= 50 ) {
            nota = 50
        }
        else if(nota >= 53 && nota <= 55 ) {
            nota = 55
        } 
        else if(nota >= 58 && nota <= 60 ) {
            nota = 60
        }
        else if(nota >= 63 && nota <= 65 ) {
            nota = 65
        } 
        else if(nota >= 68 && nota <= 70 ) {
            nota = 70
        }
        else if(nota >= 73 && nota <= 75 ) {
            nota = 75
        }
        else if(nota >= 78 && nota <= 80 ) {
            nota = 80
        } 
        else if(nota >= 83 && nota <= 85 ) {
            nota = 85
        } 
        else if(nota >= 88 && nota <= 90 ) {
            nota = 90
        }   
        else if(nota >= 93 && nota <= 95 ) {
            nota = 95
        }  
        else if(nota >= 98 && nota <= 100 ) {
            nota = 100
        } 
        console.log(`Você passou com nota ${nota}`) 
    } 
}
let nota = sistemaAprovacao(37)
nota = sistemaAprovacao(100)
nota = sistemaAprovacao(38)