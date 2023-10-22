
// function resposta() {
//     const peso = document.getElementById('peso');
//     const altura = document.getElementById('altura');

//     const imc = Number(peso.value / (altura.value ** 2));
//     const respostaNaTela = document.getElementById('resultado');
    
    
    
//     formNenviara.onclick = function (evento){
//         evento.preventDefault();
//        if (imc <= 0){
//             respostaNaTela.innerHTML = '<p> numero invalido</p>';
       
//         } else if (imc < 18.5){
//             respostaNaTela.innerHTML = '<p> Abaixo do peso</p>';
//         } else if (imc >= 18.5 && imc <= 24.9) {
//             respostaNaTela.innerHTML = '<p>Peso normal</p>';
//         } else if (imc >= 25 && imc <=29.9){
//             respostaNaTela.innerHTML = '<p>Sobrepeso</p>';
//         } else if (imc >= 30 && imc <= 34.9){
//             respostaNaTela.innerHTML = '<p>Obesidade grau 1</p>';
//         } else if (imc >= 35 && imc <= 39.9){
//             respostaNaTela.innerHTML = '<p>Obesidade grau 2</p>';
//         } else if (imc >= 40) {
//             respostaNaTela.innerHTML = '<p>Obesidade grau 3</p>';
//         }
//     };
// }

function resposta() {
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const respostaNaTela = document.getElementById('resultado');
    const imc = (peso / (altura ** 2)).toFixed(2);
    // Verificar se o peso ou a altura são inválidos
    formNenviara.onclick = function (evento){        
        evento.preventDefault();
        if (peso <= 0 || peso > 600  || altura <= 0 || altura > 2.3) {
            respostaNaTela.innerHTML = '<p>Digite um número válido </p>';
            respostaNaTela.style.backgroundColor = '#000';
        } else if (imc < 18.5) {
            respostaNaTela.innerHTML = `<p>Seu imc é ${imc.valueOf()}, você está abaixo do peso!</p>`;
            respostaNaTela.style.backgroundColor = '#8b0000';
        } else if (imc >= 18.5 && imc <= 24.9) {
            respostaNaTela.innerHTML = `<p>Seu imc é ${imc.valueOf()}, seu peso está normal!</p>`;
            respostaNaTela.style.backgroundColor = '#008000';
        } else if (imc >= 25 && imc <= 29.9) {
            respostaNaTela.innerHTML = `<p>Seu imc é ${imc.valueOf()}, você está com sobrepeso!</p>`;
            respostaNaTela.style.backgroundColor = '#f10000';
        } else if (imc >= 30 && imc <= 34.9) {
            respostaNaTela.innerHTML = `<p>Seu imc é ${imc.valueOf()}, você está com obesidade grau 1!</p>`;
            respostaNaTela.style.backgroundColor = '#f10000';
        } else if (imc >= 35 && imc <= 39.9) {
            respostaNaTela.innerHTML = `<p>Seu imc é ${imc.valueOf()}, você está com obesidade grau 2!</p>`;
            respostaNaTela.style.backgroundColor = '#f10000';
        } else if (imc >= 40) {
            respostaNaTela.innerHTML = `<p>Seu imc é ${imc.valueOf()}, você está com obesidade grau 3!</p>`;
            respostaNaTela.style.backgroundColor = '#f10000';
        }
    }
}
