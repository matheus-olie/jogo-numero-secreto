let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clicarConsole () {
    console.log('O botão console foi acionado');
}

function clicarAlert (){
    alert('Eu amo JS');
}

function clicarPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert('Estive em ' +cidade+ ' e lembrei de você.');
}

function clicarSoma() {
    let numero1 = parseInt(prompt('Informe um número'));
    let numero2 = parseInt(prompt('Informe um segundo número'));
    soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}