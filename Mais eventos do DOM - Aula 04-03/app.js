const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => { // evento de cópia
  console.log('Texto copiado!')
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => { // evento de movimentação de mouse
  div.textContent = `X ${event.offsetX} | Y ${event.offsetY }`
})

document.addEventListener('wheel', event => { // evento de giro do scroll do mouse 
  console.log(event.pageX, event.pageY)
})