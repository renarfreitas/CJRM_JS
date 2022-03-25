// utilizando callbacks

const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

let HTMLTemplate = ''
socialNetworks.forEach( socialNetwork => {
    HTMLTemplate += `<li style="color: deeppink">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate