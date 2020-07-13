// Conhecimento adquirido através do curso: https://www.udemy.com/course/web-completo/

// uma das vantagens em utilizar arrow function, é que ele otimiza o código comparado a função tradicional

// Exemplo function tradicional

    function soma(valor1, valor2){
        return valor1 + valor2
    }

// Simplificando com arrow function

    const soma2 = (valor3, valor4) => valor3 + valor4

    const multiplicar = valor => valor * valor // quando possui apenas um parametro, não é necessário colocar entre ()

    const parImpar = numero => {
        if(numero % 2 === 0){
            console.log(`O número ${numero} é par.`)
        } else {
            console.log(`O número ${numero} é impar`)
        }
    }

    parImpar(5)