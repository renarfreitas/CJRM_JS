const link = document.querySelector('a')

// console.log(link.getAttribute('href'))

console.log(link.setAttribute('href', 'https://google.com.br'))
link.innerText = 'Site do Google'

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'sucess')

paragraph.setAttribute('style', 'color: green;')