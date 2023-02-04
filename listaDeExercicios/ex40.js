/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/
function conceitoNotas(notas=[]){
    for(i in notas){
        if(notas[i] >= 0 && notas[i] <= 4.9){
            notas[i] = 'D'
        }else if(notas[i] >= 5 && notas[i] <= 6.9){
            notas[i] = 'C'
        }else if(notas[i] >= 7 && notas[i] <= 8.9){
            notas[i] = 'B'
        }else if(notas[i] >= 9 && notas[i] <= 10){
            notas[i] = 'A'
        }
    }
    console.log(`Notas com o conceito escolar ${notas}`)
}
conceitoNotas([1, 6, 8, 9.5])