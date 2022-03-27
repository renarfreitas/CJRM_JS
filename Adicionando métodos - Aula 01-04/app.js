// Objetos literal
let user = {
    name:'Renar',
    age: 39,
    email: 'renarfreitas@gmail.com',
    city: 'Salvador',
    blogPosts:  ['Empadão de frango', '4 receitas de pure de batatas'],
    login: function () {
        console.log(`${this.name} está logado!`)
    },
    logout: function () {
        console.log(`${this.name} está deslogado!`)
    }
}

console.log(user.login())
// sobreescrevendo propriedades

user.age = 32
console.log(user.age)

// acessando propriedade com notação de colchetes

console.log(user['email'])
user['name'] = 'Freitas'
console.log(user['name'])