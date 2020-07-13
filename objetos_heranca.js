// Conhecimento adquirido através do curso: https://www.udemy.com/course/web-completo/

// A herança herda os atributos e métodos de uma outra classe

// Exemplo Papagaio irá herdar os atributos e métodos da classe Passaro

    class Passaro {
        constructor(bico){ // recebendo o parametro da classe Papagio attravés do super()
            this.cor = 'Marrom'
            this.tamanho = 270
            this.bico = bico
        }

        voar(){
            console.log('Voando...')
        }

        dormir(){
            console.log('Dormindo')
        }
    }

    class Papagaio extends Passaro { // usando o extends, estou dizendo que a classe Papagaio irá herdar os atributos e métodos da classe Passaro
        constructor(){
            super('Médio') // sempre que utilizar o extends, o operador super() deve ser declado antes das variaveis. Estou passando 'Médio' como parametro para a classe Passaro
            this.sabeFalar = true
        }

        falar(){
            console.log('Falando...')
        }
    }

    let passaro = new Passaro()
    let papagaio = new Papagaio()

    papagaio.falar() // está acesso o próprio método e ira retornar o que está dentro deste método
    papagaio.dormir() // herdou o método dormir da classe Passaro e irá retornar o que estiver dentro deste método
    papagaio.cor = 'Verde' // alterando o valor do atributo
    console.log(papagaio.cor)
    console.log(papagaio.bico) // o parametro foi definido como Médio, então aqui irá retornar Médio