let imc = 0;
let button = document.querySelector('#botao');
button.addEventListener("click", function(){
    
    let nome = document.querySelector('#nome').value;
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;

    if(nome=="" || peso=="" || altura==""){
        document.querySelector('#resultado').innerHTML = '<p class="centralizar"> Revise suas informações e tente novamente. </p>';
    } else {
        altura_metro = altura/100;
        imc_inteiro = peso/(altura_metro * altura_metro);
        imc = imc_inteiro.toFixed(2);
        if(imc<18.5){
            situacao = "<span> abaixo do peso. </span>"
        } else if(imc>=18.5 && imc<24.9){
            situacao = "<span> com peso normal. </span>"
        } else if(imc>=25 && imc<29.9){
            situacao = "<span> acima do peso. </span>"
        } else if(imc>=30 && imc<34.9){
            situacao = "<span> com níveis de obesidade. </span>"
        }

        document.querySelector('#resultado').innerHTML = '<p class="centralizar"> ' +nome+ ', seu IMC é de: '+imc+ ', e você está: '+situacao+'</p> <br> <p class="centralizar"> Para saber mais, acesse: <a href="https://www.tuasaude.com/calculadora/imc/">O que é IMC?</a> </p>';
    }
});

