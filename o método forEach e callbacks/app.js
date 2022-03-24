// forEach e callbacks são funções passadas como argumentos da  invocaçaõ de outras funções ou de um método.
const myFunc = callback => {
    const value = 77

    callback(value)
}

myFunc(number => {
    console.log(number)
})

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)