const present = new Date()

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit 

const formatDate = date => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${formatTimeUnit(day)}/${formatTimeUnit(month)}/${year}`
}

console.log(formatDate(present))



const formatDateInfo = date => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const weekDay = date.getDay()
    const monthDay = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const weekDays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    const monthName = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)} - ${weekDays[weekDay]}, ${monthDay} de ${monthName[month]} de ${year}`
}

console.log(formatDateInfo(present))