// Objetos em arrays
let user = {
  name: 'Renar',
  age: 41,
  email: 'renarfreitas@gmail.com',
  city: 'Salvador',
  blogPosts: [
    { title: 'Bamofe de banana', likes: 3 },
    { title: '4 receitas de purê de batata', likes: 50 }
  ],
  login() {
    console.log('Usuário logado')
  },
  logout() {
    console.log('Usuário deslogado') // function declaration
  },
  logBlogPosots() {
    // shortcut para function declaration.
    console.log(`${this.name} escreveu os seguintes posts:`)
    this.blogPosts.forEach(post => {
      console.log(`O Post: ${post.title}, teve: ${post.likes} likes`)
    }) // Objeto de contexto // não usar o arrow fuction ficar atento ao contexto
  }
}

user.logBlogPosots()
