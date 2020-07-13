// Conhecimento adquirido através do curso: https://www.udemy.com/course/web-completo/

// Utilizado para proteger os dados de determinadas variaveis por exemplo, não tornar acessível

    class Tv {
        constructor(){
            this._relacaoCanais = Array(10, 20, 450, 540)
            this._canalAtivo = 10
            this._volume = 15
        }

        get canalAtivo(){ // método get retorna o valor
            return this._canalAtivo // irá retornar o canal 10
        }

        set canalAtivo(canal){ // método set altera o valor
            if(this._relacaoCanais.indexOf(canal) !== -1){ // se o resultado for -1, ou seja, se encontrar o canal na variavel relação de canais, o canal poderá ser alterado
                this._canalAtivo = canal
            }
        }
    }

    let tv = new Tv()

    console.log(tv.canalAtivo) // canal 10 retornado

    tv.canalAtivo = 21 // mesmo atribuindo um valor, ele vai retornar 10, pois o canal 21 não está na relação de canais

    console.log(tv.canalAtivo)

    tv.canalAtivo = 20 // 20 está na relação de canais e pode ser alterado

    console.log(tv.canalAtivo)