let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function() {
      let velocidade = this.getVelocidadeAtual() + 50
      if(velocidade > this.velocidadeMaxima) {
        velocidade = this.velocidadeMaxima
      }
      this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function() {
      return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
      this.velocidadeAtual = velocidadeAtual
    }
  }

  let carro = new Carro()
  console.log(carro.velocidadeAtual)
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  carro.acelerar()
  console.log(carro.velocidadeAtual)
  carro.velocidadeMaxima = 280
  carro.acelerar()
  console.log(carro.velocidadeAtual)




  let Carro2 = function() {
    
    var velocidadeMaxima = 180 // criação de variável no escopo de bloco, tornando-a inacessível fora deste escopo
    var quilometrosRodados = 0

    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    

    this.acelerar = function() {
      let velocidade = this.getVelocidadeAtual() + 50
      if(velocidade > velocidadeMaxima) {
        velocidade = velocidadeMaxima
      }
      this.setVelocidadeAtual(velocidade)

      setQuilometrosRodados(0.07)
      console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = function() {
      return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
      this.velocidadeAtual = velocidadeAtual
    }

    var setQuilometrosRodados = function(q) { // método sendo criado apenas dentro do escopo da função Carro2, mantendo inacessível fora deste escopo
      quilometrosRodados += q
    }
  }

  let carro2 = new Carro2()
  console.log(carro2.velocidadeAtual)
  carro2.acelerar()
  console.log(carro2.velocidadeAtual)
  carro2.acelerar()
  console.log(carro2.velocidadeAtual)
  carro2.acelerar()
  console.log(carro2.velocidadeAtual)
  carro2.acelerar()
  console.log(carro2.velocidadeAtual)
  //carro2.velocidadeMaxima = 280
  carro2.acelerar()
  console.log(carro2.velocidadeAtual)

  console.log(carro)
  console.log(carro2)