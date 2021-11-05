/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
Ps2: o uso do Bootstrap (ou qualquer outra lib CSS) é opcional.
*/

const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')
const correctAnswers = ['C', 'D', 'A', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()

    const userResponses = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    
    let score = 0
    

    userResponses.forEach(( response, index) => {
        if(response === correctAnswers[index]) {
            score += 25
        }
    })

    scrollTo(0,0)

    finalResult.classList.remove('d-none')
    
    let counter

    const time = setInterval( () => {
        if(counter === score){
            clearInterval(time)
        }

        
        finalResult.querySelector('span').textContent = `${score}`
        counter++
    }, 10)
})