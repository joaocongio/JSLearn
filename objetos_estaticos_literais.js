// Conhecimento adquirido através do curso: https://www.udemy.com/course/web-completo/

    let objetoLiteral = {
        nome: 'João',
        sobrenome: ' Goularte',
        idade: 23,
            verInformacoes: function(){
                console.log(`Meu nome é ${this.nome}${this.sobrenome} e tenho ${this.idade} anos`)
            }
    }

objetoLiteral.verInformacoes()

    let produto = 'Notebook'
    let valor = 2500

    let objetoEstatico = {
        produto: produto, // aqui o nome da variavel por ser diferente: Exemplo: prod = produto
        valor: valor,
            exibirDetalhes: function(){
                console.log(`O produto escolhido é um: ${this.produto}, com valor de R$ ${this.valor}`)
            }
    }

objetoEstatico.exibirDetalhes()

// Outra formma mais simplificada

let objetoEstatico2 = {
    produto, // seria uma simplificação de utilizar produto: produto, caso utilize o mesmo nome
    valor, // seria uma simplificação de utilizar valor: valor, caso utilize o mesmo nome
        exibirDetalhes(){ // não é necessário incluir o function
            console.log(`O produto escolhido é um: ${this.produto}, com valor de R$ ${this.valor}`)
        }
}

objetoEstatico2.exibirDetalhes()


// modificando valor

let objetoEstatico3 = {
    produto, 
    valor,
}

console.log(objetoEstatico3.produto) // está recuperando notebook como valor

objetoEstatico3.produto = 'Geladeira'

console.log(objetoEstatico3.produto) // o valor é alterado de notebook para geladeira