let bicicletaFactory = function(cor, marcha, aro, tipoPedal){
    // lógica
    // requisição http
    // reposta http
    return {
        cor,
        marcha,
        aro,
        tipoPedal,
        pedalar(){}
    }
}

let bicicleta1 = bicicletaFactory('Azul', '18', 29, 'Normal')
console.log(bicicleta1)

let bicicleta2 = bicicletaFactory('Vermelha', '16', 18, 'Normal')
console.log(bicicleta2)