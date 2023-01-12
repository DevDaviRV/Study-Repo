






// function primo ou nao

exibirPrimo(500);

function exibirPrimo(limite){
    for ( let numero = 2; numero <= limite; numero++){
        let ehprimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if( numero % divisor === 0 ){
                ehprimo = false;
                break;
            }
        }
        if(ehprimo) console.log(numero);
    }
}




//criar function que exibe a quantidade de * que possui
exibirAsteriscos(5)

function exibirAsteriscos(linhas){
     let padrao = '';
     for(let linha = 1; linha <= linhas; linha++){
         padrao += '*'
         console.log(padrao);
     }

    // outra forma de resolver (loop nested)

    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}




//funçao para calcular media de aluno e imprimir sua Nota/media

const array = [90,90,80]

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcMedia(notas)
    
         if(media <= 59)return 'F';
         if(media <= 69)return 'D';
         if(media <= 79)return 'C';
         if(media <= 89) return 'B';
         return 'A'      
    }
    
function calcMedia(array) {
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma / (array.length);

}




//Criar Função que reotrna os multipros de 3 e 5 ate certo limite
//e some todos os multiplos ate o 'limite'
//somar(10);

function somar(limite) {
    let mult3 = 0;
    let mult5 = 0;
    for (let i = 0; i <= limite; i++){
        if( i % 3 === 0)
        mult3 += i;
        if(i % 5 === 0 )
        mult5 += i;
    }
    console.log(mult3 + mult5);
}



//Criar um metodo para ler propriedades de um objeto 
//Exibir somente as propriedades do tipo string presentes no Objeto
const filme = {
    title : 'ving',
    ano : 2018,
    diretor : 'calvin',
    perso : 'thor'
}


exibirPropriedades(filme)
function exibirPropriedades(obj){
    for(prop in obj)
    if(typeof obj[prop] === 'string')
        console.log(prop,obj[prop])
}





//CODIGO Par ou Impar
//receber uma quantidade de valores para avaliar
//funçao exibe se cada valor é par ou impar

let result = exibirTipo(7);
console.log(result)
function exibirTipo(limite){
    for( let i = 0; i <= limite; i++){
        if(i % 2 === 0 )
        console.log(i, 'par')
        else
            console.log(i, 'impar');
        
    }
}




//Codigo velocidade e multa
//velocidade max 70
//a cada 5km/h > velociade max + 1 ponto na carteira
//usar math.floor
//caso pontos > 12 = carteira suspensa

 let calcularV = radar(150);
 


function radar(velocidade) {
    const veloMax = 70;
    const porPonto = 5;
    if (velocidade <= veloMax)
    return 'Multado';
     
    else {
        const pontos = Math.floor (((velocidade - veloMax) / porPonto))
        if (pontos >= 12)
        console.log('carteira susp')
        else 
        console.log('pontos' , pontos)
    }
 }



//codigo FIZZBUZZ
const resultado = fizzBuzz(7);

console.log(resultado);
function fizzBuzz(n) {

    if (n % 3 === 0 && n % 5 === 0) 
        return 'fizzBuzz'

    if (typeof n !== 'number') 
        return 'Nao é numero'
    
    if (n % 3 === 0) 
        return 'fizz'
    
    if (n % 5 === 0) 
        return 'buzz'
    
    return n;
    
}
