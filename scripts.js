console.log('Início do bloco de Script')

const objetoTeste = {
    nome: 'fulano',
    cargo: 'gerente',
    cep: '30430225'
}

//É possível declarar um array com objetos diferentes
const animals = [
    'lion',
    'monkey',
    {
        name: 'llama',
        age: 5
    }
]

function clickBotao() {
    console.log("Deu certo o clique do botão")
    let name = "Patrick"
    let checaSeNomeEPatrick = name === "Patrick"
    console.log(`Nome = Patrick? ${checaSeNomeEPatrick}`)
    console.log(animals)
    console.log(`A idade do animal na posição 2 é ${animals[2].age}`)
    const soma = function (number1, number2) {
        let total = number1 + number2
        return total
    }
    soma(5, 6)
    console.log(soma.length)
}

// Usando construtores
function clickBotao2() {
    function Person(param) {
        this.name = param;
        this.movimento = function () {
            return this.name + " está andando"
        }
    }

    const patrick = new Person('Patrick')
    const joao = new Person('João')

    console.log(patrick.movimento())
    console.log(joao.movimento())
}

let tech = ["primeiro dado", "segundo dado"]

function clickBotao3() {
    let i = 0
    tech.push('no final') // Adiciona ao final
    tech.unshift('no inicio') // Adiciona no começo
    console.log(tech)

    /* function keydown(e) {
    document.onkeydown = keydown;

            console.log(e.keyCode)
        }
        if (e.keyCode === 18 && i < 1) {
            console.log('entrou na função alt key' + i)
            tech.pop() // remove do final
            tech.shift() // remove do começo
            i = 2;
            console.log('i = ' + i)
        } */

}

function clicando() {
    console.log('Testando se detectou a tecla')
}