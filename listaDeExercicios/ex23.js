/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/
function desempenhoAluno(codigo, nota1, nota2, nota3) {
    while(codigo >= 0){
        let mediaPonderada = 0
        if(nota1 > nota2 && nota1 > nota3){
            mediaPonderada = (4*nota1 + 3*nota2 + 3*nota3)/(4+3+3)        
    
        }
        else if(nota2 > nota1 && nota2 > nota3){
            mediaPonderada = (4*nota2 + 3*nota1 + 3*nota3)/(4+3+3)        
    
        }
        else if(nota3 > nota2 && nota3 > nota1){
            mediaPonderada = (4*nota3 + 3*nota2 + 3*nota1)/(4+3+3)        
    
        }else if(nota1 == nota2 && nota1 == nota3){
            mediaPonderada = (4*nota1 + 3*nota2 + 3*nota3)/(4+3+3)        
    
        }   
        if(mediaPonderada >= 5){
            console.log("APROVADO")
        }else{
            console.log("Reprovado")
        }
       codigo =  prompt("Digite um código negativo para encerrar o processo, ou outro código de aluno para continuar: ")
        if(codigo >= 0){
        nota1 = prompt("Digite a nota do aluno:")
        nota2 = prompt("Digite outra nota:")
        nota3 = prompt("Digite mais uma nota:")
        desempenhoAluno(codigo, nota1, nota2, nota3)
        }        
    }
}
desempenhoAluno(10349, 8, 7, 5)