// Conhecimento adquirido através do curso: https://www.udemy.com/course/web-completo/

// O Template String facilita a utilização das varíaveis junto a um texto com strings e deixa o código mais clean

// Exemplo tradicional

    let nome = 'João'
    let sobrenome = ' Goularte'
    let idade = 23

    console.log('Meu nome é ' + nome + sobrenome + ' e tenho ' + idade + ' anos') // modo tradicional

// Exemplo utilizando template string

    let nome1 = 'João'
    let sobrenome1 = 'Goularte'
    let idade1 = 23

    console.log(`Meu nome é ${nome}${sobrenome} e tenho ${idade1} anos`) // utilizamos crase 'back tips' junto com o cifrão, para informar que é um template string e o que está dentro de chaves, é uma variavel, função etc

// Exemplo template string utilizando função

    function soma(valor1,valor2){
        return valor1 + valor2
    }

    console.log(`A soma é: ${soma(5,5)}`)