// Conhecimento adquirido através do curso: https://www.udemy.com/course/web-completo/

// Abstração = definição das entidades do mundo real. De fato abstraimos tudo, sendo:
// Entidade(objeto), características(atributo) e ações(métodos)

// Exemplo de abstração Carro

  class Carro { // definição da classe Carro (a classe é um modelo do objeto Carro)
        constructor(){ // definição dos atributos
            this.modelo = 2019
            this.ano = 2020
            this.cor = 'Preto'
            this.qtdePortas = 4
        }

        ligar(){} // método ligar o carro

        desligar(){} // método desligar o carro

        freiar(){} // método freiar o carro

        buzinar(){} // método buzinar
  }

  let carro = new Carro() // instanciando o objeto Carro