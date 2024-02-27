// Objetos literal
let user = {
  name: 'Renar',
  age: 41,
  email: 'renarfreitas@gmail.com',
  city: 'Salvador',
  blogPosts: ['Banofe de banana', 'Feijão'],
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
