// Function declaration * Aqui acontece o hoisting: por baixo dos "panos" o javascript pucha a declaração da função para o topo do arquivo.
function sayHi () {
    console.log('oi')
}

// Function expression * Aqui o hoisting não funciona.
const showFood = function () {
    console.log('pizza')
}

sayHi()

showFood()