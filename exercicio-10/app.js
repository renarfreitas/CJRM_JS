/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
let cat = {
  name: 'Theodor',
  age: 1,
  color: 'cinza',
  bestFriends: ['Gamora','Greta'],
  sound: () => 'miauu'
}

console.log(cat)
/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", e "sound", que recebeu uma função que retorna ${cat.sound()}`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
cat.age += 2
console.log(cat.age)
/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
const addFriends = function (object, string) {
  object.push(string)
}

addFriends(cat.bestFriends, 'Mel')

console.log(cat.bestFriends)
/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/

const addColor = function (object, cor) {
  object['color'] += ` e ${cor}`
}

addColor(cat, 'preto')

console.log(cat.color)

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
const isAObject = object => typeof object === 'object'

console.log(isAObject(cat))
/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
let dog = {
  name: 'Greta',
  age: 5,
  color: 'preto',
  bestFriends: ['Gamora','Mel'],
  sound: () =>'AuhAu'
}


const sumObjects = cat.age + dog.age
const showMessage = `A soma das idades de ${cat.name} e ${dog.name} é ${sumObjects}.`

console.log(showMessage)
/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/


const isAnSUV = car => [
  'Honda HR-V',
  'Jeep Renegade',
  'Ford EcoSport',
  'Hyundai iX35'
].includes(car) 

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/
const getTypeDefinition = type => {
  return {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }[type]
}

console.log(getTypeDefinition('undefined'))


let user = {
  name: 'Greta',
  age: 5,
  color: 'preto',
  bestFriends: ['Gamora','Mel'],
  sound: function () {
    console.log('AuhAu')
  },
  logSound: function () {
    console.log(this.sound)
  } 
}

user.logSound()