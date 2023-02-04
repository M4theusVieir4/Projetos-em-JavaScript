/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/
function crescimento (alt1, tax1, alt2, tax2){
    if(alt1 > alt2) {
        let i
        console.log("A criança 1 é maior")           
            for(i = 1; i <= 100; i++){
                alt1 *= tax1
                alt2 *=tax2
                if(alt2 > alt1){
                    break
                }
            }
            console.log(`A criança dois ultrapassara a um em ${i} anos`)        
    }
    if(alt2 > alt1) {
        let x
        console.log("A criança 2 é maior")           
            for(x = 1; x <= 100; x++){
                alt1 *= tax1
                alt2 *=tax2
                if(alt1 > alt2){
                    break
                }
            }
            console.log(`A criança dois ultrapassara a um em ${x} anos`)        
    }


}
crescimento(100, 1, 2, 20)