// FAQ PERGUNTAS FREQUENTES

const opentable1 = document.getElementById('opentable1');
const opentable2 = document.getElementById('opentable2');
const opentable3 = document.getElementById('opentable3');
const opentable4 = document.getElementById('opentable4');
const cardContent = document.getElementsByClassName('card-faq')[0];
const cardContent2 = document.getElementsByClassName('card-faq')[1];
const cardContent3 = document.getElementsByClassName('card-faq')[2];
const cardContent4 = document.getElementsByClassName('card-faq')[3];

function abrirTable() {
    if(opentable1.checked == true){
        cardContent.style.height = '7.2rem'  
    }else{cardContent.style.height = ''}

    if(opentable2.checked == true){
        cardContent2.style.height = '7.2rem'
    }else{cardContent2.style.height = ''}

    if(opentable3.checked == true) {
        cardContent3.style.height = '8.5rem'
    }else{cardContent3.style.height = ''}

    if(opentable4.checked == true) {
        cardContent4.style.height = '8.5rem'
    }else{cardContent4.style.height = ''}
}