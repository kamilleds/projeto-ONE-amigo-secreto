//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let amigosJaSorteados = [];

// Adiciona os amigos à lista e exibe na tela
function adicionarAmigo() {
    let amigo = document.querySelector('input').value.trim();
    if (amigo === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    if (listaDeAmigos.includes(amigo)) {
        alert('Amigo já adicionado.');
    } else {
        listaDeAmigos.push(amigo);
        document.getElementById('listaAmigos').innerHTML = listaDeAmigos
            .map(amigo => `<li>${amigo}</li>`)
            .join('');
        limparCampo();
    }
}

// Sorteia um amigo e exibe o resultado
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    if (amigosJaSorteados.length === listaDeAmigos.length) {
        alert('Todos os amigos já foram sorteados! Reiniciando...');
        reiniciarJogo();
        return;
    }

    let sorteio;
    let amigoSorteado;

    do {
        sorteio = Math.floor(Math.random() * listaDeAmigos.length);
        amigoSorteado = listaDeAmigos[sorteio];
    } while (amigosJaSorteados.includes(amigoSorteado));

    amigosJaSorteados.push(amigoSorteado);

    // Exibe o resultado e esconde a lista de amigos
    document.getElementById('resultado').innerHTML = `Seu amigo secreto é: <strong>${amigoSorteado}</strong>`;
    document.getElementById('listaAmigos').innerHTML = ''; // Esconde a lista
}

// Limpa o campo de entrada
function limparCampo() {
    document.querySelector('input').value = '';
}

// Reinicia o jogo (limpa sorteados, lista e resultado)
function reiniciarJogo() {
    listaDeAmigos = []; // Limpa a lista de amigos
    amigosJaSorteados = []; // Limpa a lista de sorteados
    document.getElementById('resultado').innerHTML = ''; // Remove o nome sorteado
    document.getElementById('listaAmigos').innerHTML = ''; // Limpa a exibição da lista de amigos
    alert('O jogo foi reiniciado! Adicione novos amigos para começar.');
}
