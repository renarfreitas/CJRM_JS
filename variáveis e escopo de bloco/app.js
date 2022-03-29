// variáveis e escopo de bloco

const age = 31 // escopo global



if (true) {
    const age = 41 // escopo local de bloco
    const name = 'Renar'

    console.log(`Dentro do 1º bloco de código: ${age}, ${name}`)

    if (true) {
        const age = 51
        console.log(`Dentro do 2º bloco de código: ${age}`)

        var test = 'oi' // foge do escopo.
    }
}

console.log(`Fora do bloco de  código: ${age} ${name} ${test}`)