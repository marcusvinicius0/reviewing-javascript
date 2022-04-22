// var area = document.getElementById('area');

// function entrar() {
//     var nome = prompt('Digite seu nome:');

//     if (nome === '' || nome === null) {
//         alert('Ops, algo deu errado...')
//         area.innerHTML = "Clique no botão para acessar..."
//     } else {
//         area.innerHTML = "Bem vindo(a) " + nome + " ";

//         let botaoSair = document.createElement('button');
//         botaoSair.innerText = "Sair da conta";
//         botaoSair.onclick = sair;


//         area.appendChild(botaoSair);
//     }

// }

// function sair(){
//     alert("Até mais...");
//     area.innerHTML = "Você saiu."
// }

// function mediaAluno(nota1, nota2){         //parametros na função, esperando valores..
//     var media = (nota1 + nota2) / 2;

//     if(media >= 7){
//         console.log("Aluno aprovado com a média: " + media)
//     }else if(media < 7){
//         console.log("Aluno reprovado com a média: " + media) 
//     }
// }

// function aluno(nome, curso){
//     var mensagem = `Seja bem vindo(a) ${nome} ao curso de ${curso}`

//     console.log(mensagem)
// }

// var array = ['Marcus V.', 'José Dias', 150];

// console.log(array[0], array[1])
// console.log(array.length)
// console.log(array.indexOf('José Dias'))
// console.log(array[1] = 'Marcus Begheli')

// array.push('Tarvick')

// console.log(array)


// var x = 5;

// while(x <= 10){
//     document.write("<br> O valor do x é: " + x)

//     x++;    //aumentando o valor do x
// }

// var valor = 10;

// for(a = 0; a <= valor; a++){
//     document.write("<br> Valor do A é: " + a);
// }

// function pedir(){
//     var valor = prompt("Digite um valor de 1 a 4");

//     switch(Number(valor)){
//         case 1: 
//             alert("Você escolheu 1 = Suco");
//             break;
//         case 2: 
//             alert("Você escolheu 2 = Sorvete");
//             break;
//         case 3: 
//             alert("Você escolheu 3 = Água gelada");
//             break;
//         case 4:
//             alert("Você escolheu 4 = Chamar o garçom");
//             break;
//         default:
//             alert("Escolha uma opção entre 1 a 4");
//             break;
//     }

// }

// var data = new Date();

// hor = data.getHours();
// min = data.getMinutes();
// sec = data.getSeconds();

// console.log(`${hor}:${min}:${sec}`)



// CALCULADORA IMC

// var peso;
// var altura;
// var imc;
// var resultado;

// function calcular(event) {
//     event.preventDefault();

//     peso = document.getElementById('peso').value;
//     altura = document.getElementById('altura').value;

//     imc = peso / (altura * altura);

//     resultado = document.getElementById('resultado');

//     if (imc < 17) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está muito abaixo do peso...'
//     } else if (imc > 17 && imc < 18.49) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está abaixo do peso!'
//     } else if (imc >= 18.5 && imc < 24.99) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal!'
//     } else if (imc > 25 && imc < 29.99) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso'
//     } else if (imc >= 30) {
//         resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está na obesidade.'
//     }

//     document.getElementById('peso').value = '';
//     document.getElementById('altura').value = '';

// }


