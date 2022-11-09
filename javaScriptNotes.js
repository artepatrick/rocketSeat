//javaScriptNotes
//Curso sobre javaScript

//12.5 // float
//Infinity //Infinito

//OBJETO
//https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-java-script/tipos-de-dados/object
//O objeto tem a seguinte estrutura
{
	nome: 'fulano',
		cargo: 'gerente',
			cep: '30430225'
}

//STRING
//A String é uma sequência de dados separada por vírgula

[
	"leite",
	"ovos",
	2,
	3
]

/* VAR, LET CONST
"var" é Global
	< script >
	console.log('teste se existe x', x) */
var x = 0
console.log('teste se existe x', x)
//</ script >

//let e const só funcionam no escopo em que foram criados

{
	let x
}
console.log(x) // dá erro


let name = "Patrick"
let checaSeNomeEPatrick = name === "Patrick"
console.log(checaSeNomeEPatrick)

//É possível declarar um array com objetos diferentes
const animals = [
	'lion',
	'monkey',
	{
		name: 'llama',
		age: 5
	}
]

// Passando parâmetros dentro de uma variável que recebe uma função
const soma = addFuncion(numer1, number2){
	numer1 + number2; 
}

soma(5, 6)
console.log(soma)

// Maneira lúdica de explicar uma função kkk
const copo = function fazerSuco(fruta1, fruta2) {
	return fruta1 + fruta2
}

console.log(copo)

// Observando comportamento de veriáveis por escopo
let parametro = 'Valor inicial'
function modificaParametro(parametro) {
	parametro = 'valor modificado'
	return parametro
}
// Tanto faz a ordem
console.log(modificaParametro(parametro)) // 'valor modificado
console.log(parametro) // 'Valor inicial

// Observando o escopo novamente
let parametro

function modificaParametro2() {
	parametro = 'primeiro valor'
}

console.log(parametro) //undefined
modificaParametro() //Undefined
console.log(parametro) //'primeiro valor


// Function Hoisting
sayMyName()

function sayMyName() {
	console.log('Patrick')
} // Nesse caso a função sofre Hoisting, ou seja, ela "sobe" (não sofre elevação)

const = function sayMyName() {

}// Nesse caso a função não sofre Hoisting porque agora é uma const



// ARROW FUNCTIONS
const sayMyName = () => {
	console.log('Patrick')
}

sayMyName() // Printa 'Patrick' no log

// CALLBACK FUNCTIONS
function sayMyName(name2) {

	nome2()
}
sayMyName(
	() => {
		console.log('estou em uma callback')
	}
)// ao final desse rolê vamos ter no console a arrow funcion completa

//a seguir uma escrita que dá o mesmo resultado
function sayMyName(name2) {

	function nome2() {
		console.log('estou em uma callback')
	}
	nome2()
}
sayMyName()

// CONSTRUCTOR
function Person(param) {
	this.name = param;
	this.movimento = function () {
		return this.name + " está andando"
	}
}

const patrick = new Person('Patrick')
const joao = new Person('João')
console.log(patrick) // Vai aparecer 'Patrick'
console.log(joao) // Vai aparecer 'João'

// JEITO DE GARANTIR QUE NÃO VÃO ERRAR NO CONSTRUCTOR
function User(name) {
	if (!new.target) { // if you run me without new
		return new User(name); // ...I will add new for you
	}

	this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John

//PROTOTYPE
// __proto__
console.log("Patrick".__proto__)
let number = 345.256528
console.log(number.toFixed(2).replace(".", ",")) // Mostra 345,25


	//PERGUNTAS
	(1) Funções tipo Number() são padrão do javaScript ? Onde encontro a lista delas ?
		-> "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"