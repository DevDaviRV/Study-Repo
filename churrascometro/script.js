// ADULTOS: 400G DE CARNE E 1L DE CERVEJA
//CRIANÇAS: 200G DE CARNE E 500ML DE BEBIDA


let adultos = document.getElementById('inp-1');
let crianca = document.getElementById('inp-2');
let duracao = document.getElementById('inp-3');

let carne = document.getElementById('carne')
let breja = document.getElementById('cerveja')
let bebida = document.getElementById('bebidas')
let result = document.getElementById('calcText')

function calcChurras() {
    if (duracao.value >= 6) {
        carne.innerHTML = Math.ceil(adultos.value * 800 / 1000 + crianca.value * 400 / 1000);
        breja.innerHTML = Math.ceil(adultos.value * 2000 / 355);
        bebida.innerHTML = Math.ceil(crianca.value * 1000 / 2000);
        result.style.display = 'inherit'
    } else {
        carne.innerHTML = Math.ceil(adultos.value * 400 / 1000 + crianca.value * 400 / 1000);
        breja.innerHTML = Math.ceil(adultos.value * 1000 / 355);
        bebida.innerHTML = Math.ceil(crianca.value * 500 / 2000);
        result.style.display = 'inherit'
    }
}

function resetChurras() {
    adultos.value = 0
    crianca.value = 0
    duracao.value = 0
    result.style.display = 'none'
}