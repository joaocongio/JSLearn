// Conhecimento adquirido através do curso: https://www.udemy.com/course/web-completo/

// O JS possui 3 escopos: global, funções e bloco

// Exemplo 1 utilizando var

    var serie = 'Breaking Bad' // variavel criada no escopo global

    {
        var serie = 'The Walking Dead'  // consigo redeclarar a mesma variavel em um bloco e alterar o valor, tanto do bloco quanto do escopo global
        console.log(serie) // = The Walking Dead 
    }

    console.log(serie) // = The Walking Dead, já que alterei o valor dentro do bloco


// Exemplo 2 utilizando let

    let serie2 = 'Breaking Bad' // variavel criada no escopo global


    let serie2 = 'The Walking Dead' // não é permitido redeclarar a mesma variavel, dentro do mesmo escopo e alterar o respectivo valor

    console.log(serie2) // irá retornar um erro, já que a variavel serie2 existe e tentei redeclarar ela dentro do mesmo escopo


// Exemplo 3 utilizando let

    let serie3 = 'Breaking Bad' // variavel criada no escopo global

    {
        let serie3 = 'The Walking Dead' // variavel com o mesmo nome, porém sendo declarada em outro escopo, diferentemente do exemplo 2
        console.log(serie3) // irá retornar The Walking Dead
    }

    console.log(serie3) // irá retornar Breaking Bad


// Exemplo 4 utilizando const

    const serie4 = 'Breaking Bad' // variavel criada no escopo global

    const serie4 = 'The Walking Dead' // não é permitido redeclarar a mesma variavel, dentro do mesmo escopo e alterar o respectivo valor

    console.log(serie4) // irá retornar um erro, já que a variavel serie4 existe e tentei redeclarar ela dentro do mesmo escopo


// Exemplo 5 utilizando const

    const serie5 = 'Breaking Bad' // variavel criada no escopo global

    function series(){
        const serie5 = 'The Walking Dead' // variavel declarada no escopo da função, ou seja, não está no mesmo escopo da global
        console.log(serie5) // irá retornar The Walking Dead
    }

    series()

    console.log(serie5) // Irá retornar Breaking Bad