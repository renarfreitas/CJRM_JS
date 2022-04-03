//Query selector & query selector all
const paragraph = document.querySelector('.error')
const errorDiv = document.querySelector('div.error')
const h1 = document.querySelector('body > h1')
const paragraphs = document.querySelectorAll('p')

// console.log(paragraphs[0])

paragraphs.forEach(element => {
    console.log(element)
})

// console.log(paragraph, errorDiv, h1)

const errors = document.querySelectorAll('.error')

console.log(errors)

errors.forEach(lements => {
    console.log(lements)
})