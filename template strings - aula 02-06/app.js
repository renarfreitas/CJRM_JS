const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
// const postMessage = 'O post "' + postTitle + '", do ' + postAuthor +', tem ' + postComments + ' comentários.'

// console.log(postMessage)

console.log('Voce manja do filme \'As branquelas\'?') // escape com barras invertida, para resolver conflitos de aspas.

// usando template strings
const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`

console.log(postMessage)
// criando templates HTML 
const html =`
    <h2>${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Este post tem ${postComments} comentários</span>
`
console.log(html)

const h1 = document.querySelector('h1')

h1.innerHTML = html