function Pessoa(nome) {    
        this.nome = nome    
   this.falar =function () {//Para transformar essa função diretamente na instância criada 
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

