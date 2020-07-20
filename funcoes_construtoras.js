let Carro = function (){ // criando uma função construtora
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function(){ // this.acelerar é também um atributo, a partir desse atributo podemos executar a função
       // this.velocidadeAtual += 10

       let velocidade = this.getVelocidadeAtual() + 10 // retorna a velocidade atual e adiciona + 10 na variavel velocidade
            this.setVelocidadeAtual(velocidade) // pega a variável velocidade e passa como parâmetro para o "método" set
    } 

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual // velocidadeAtual é referente ao parâmetro passado, esta variavel está disponível apenas do bloco dessa função. Ela que vai receber o valor de velocidade
    }
}

let carro = new Carro() // instanciando a função Carro, será construida de fato e convertida em um obj

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)

carro.acelerar() // recebe +10
carro.acelerar() // recebe +10

console.log(`A velocidade agora é de: ${carro.setVelocidadeAtual()}`)