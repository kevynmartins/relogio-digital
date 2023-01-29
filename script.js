const horas = document.getElementById('horas'); //variavel que não muda chamada de horas que vai pegar o valor que está no meu html com o elemento 'id'
const minutos = document.getElementById('minutos'); //variavel que não muda chamada de minutos vai pegar o valor do 'id' minutos do html
const segundos = document.getElementById('segundos'); //variavel que não muda chamada de segundos vai pegar o valor do 'id' segundos do html

//criar a função de tempo em javascript

const relogio = setInterval(function time() {
    let dateToday = new Date(); //variavel que pode ser mudado da data de hoje
    let hr = dateToday.getHours(); //variavel que pode ser mudado nas horas que vai pegar a horas de hoje
    let min = dateToday.getMinutes(); //variavel que pode ser mudado nos minutos que vai pegar os minutos de hoje
    let s = dateToday.getSeconds(); //variavel que pode ser mudado nos segundos que vai pegar os segundos de hoje

    if (hr < 10) hr = '0' + hr; // Se a hora for menor que '10' a hora vai receber o '0' na frente da hora
    if (min < 10) min = '0' + min; // Se o minutos for menor que '10' o minutos vai receber o '0' na frente do minutos
    if (s < 10) s = '0' + s; // Se os segundos for menor que '10' o segundos vai receber o '0' na frente dos segundos
    
    horas.textContent = hr; //função que vai substituir o valor no html com o elemento 'id' 'horas'
    minutos.textContent = min; //função que vai substituir o valor no html com o elemento 'id' 'minutos'
    segundos.textContent = s; //função que vai substituir o valor no html com o elemento 'id' 'segundos'

})