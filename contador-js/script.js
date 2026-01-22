/*
  Projeto: Contador com JavaScript
  Autor: Daniel Neto (D4nN3t0)
  GitHub: https://github.com/D4nN3t0
  Data: 2026
*/

// Botões de Ação
const aumentaNumero = document.getElementById("aumenta");
const diminuiNumero = document.getElementById("diminui");
const reiniciar = document.getElementById("reinicio");

// Prompt da Mensagem
const mensagem = document.getElementById("mensagem");

let numero = 0;
const maximo = 10;
const minimo = 0;

// Botão de Somar Número
aumentaNumero.addEventListener('click', function() {
    if (numero < maximo) {
        numero++
        atualizarTela();
    } 
});

// Botão de Subtrair Número
diminuiNumero.addEventListener('click', function() {
    if (numero > minimo) {
        numero--
        atualizarTela();
    } 
});

// Botão reset
reiniciar.addEventListener('click', function resetado() {
    numero = minimo;
    atualizarTela();
});

// Mensagem exibida na tela
function atualizarTela(){
    mensagem.textContent = numero;
    mensagem.classList.remove("vermelho", "verde");
    if (numero === maximo) {
        mensagem.classList.add("vermelho");
        aumentaNumero.disabled = true;
    } else if (numero > minimo) {
        mensagem.classList.add("verde");
        aumentaNumero.disabled = false;
        diminuiNumero.disabled = false;
    } else {
        diminuiNumero.disabled = true;
        aumentaNumero.disabled = false;
        mensagem.classList.add("azul");
    }
}

atualizarTela();

