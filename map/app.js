/*O método map: Método de array que pode ser usado quando se quer gerar 
um novo array, com a mesma quantidade de itens que o original, porem 
com os itens modificados.

Ele não modifica o array original.

O map recebe a declaração de uma função como argumento, e essa função pode r
eceber 3 parametros, o item o index e o array, dos 3 somente o item é obrigatório.

A função que o map recebe, sempre retornar um valor, diferente do forEach!
*/

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)

console.log(doubleNumbers, numbers)

// segundo exemplo:

const prices = [20, 10, 30, 25, 15, 40 ,80 ,5]

const salePrices = prices.map(price => price / 2)

console.log(salePrices)

// terceiro exemplo

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

const saleProducts = products.map(product => {
    if(product.price >= 30){
        return { name: product.name, price: product.price / 2}
    }

    return product
})

console.log(saleProducts, products)