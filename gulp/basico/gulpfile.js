const gulp = require('gulp')
const { series, parallel} = require('gulp')
//const { series } = require('gulp')
//const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes2!')
    return cb()
}

function copiar(cb) {
  //  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
       // .pipe(imagePelaMetade())
       // .pipe(imageEmpretoEBranco)
       // .pipe(transformacaoA())
       // .pipe(transformacaoB())
       // .pipe(transformacaoC())
    console.log('Tarefa de copiar!')
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim,
)