/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
function tipoTriangulo (a, b, c) {
    if( a == b && a == c) {
        console.log(`O triângulo é equilátero pois os lados a:${a}, b:${b}, c:${c} são iguais`)
    } else if (a == b || a == c || b == c){
        console.log(`O triângulo a:${a}, b:${b}, c:${c} é isóceles pois possui dois lados iguais `)
    } else if (a != b && a != c && b != c) {
        console.log(`O triângulo a:${a}, b:${b}, c:${c} é escaleno pois possui lados diferentes `)
    }
    
}

let lados = tipoTriangulo(15, 20, 15)
lados = tipoTriangulo(15, 15, 15)
lados = tipoTriangulo(5, 6, 8)