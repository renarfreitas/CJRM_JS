// obter um elemento através do ID
const title = document.getElementById('title')

console.log(title)

// obter elementos atrvés do nome da classa
const erros = document.getElementsByClassName('error')

console.log(erros[1]) // HTMLCollection[], rrepresentação de uma lisat genêrica de elementos. Similar ao nodelist

// obter elementos atrvés do nome da tag
const paragraphs = document.getElementsByTagName('p')

console.log(paragraphs)
