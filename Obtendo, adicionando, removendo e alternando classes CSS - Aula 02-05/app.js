// const paragraphs = document.querySelector('p')

// console.log(paragraph.classList)

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')
const paragraphs = document.querySelectorAll('p')
const title = document.querySelector('h1')

paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes('success')) {
    paragraph.classList.add('success')
  } else if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error')
  }
})

title.classList.toggle('test') // adiciona a class ao elemento
title.classList.toggle('test') // remove a class do elelmento caso ele já tenha.
