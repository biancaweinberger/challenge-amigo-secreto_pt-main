let listaAmigo = [];
const lista = document.getElementById('listaAmigos');
const inNome = document.getElementById('amigo');
const resultado = document.getElementById('resultado');

function adicionarAmigo() {
    const nomeAmigo = inNome.value;

    if (!nomeAmigo) {
        window.alert('Digite um nome válido!');
        return;
    }
    if (listaAmigo.includes(nomeAmigo)) {
        window.alert('Amigo já adicionado!');
        return;
    }
    listaAmigo.push(nomeAmigo);
    listaAtualizada();
    inNome.value = "";
}

function listaAtualizada() {
    lista.innerHTML = "";
    listaAmigo.forEach((amigo, index) => {
        const item = document.createElement('li'); 
        item.textContent = amigo;
        const btRemover = document.createElement('button');
        btRemover.textContent = 'Remover';
        btRemover.classList.add('button-remove');
        btRemover.onclick = () => removerAmigo(index); 
        item.appendChild(btRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    listaAmigo.splice(index, 1);
    listaAtualizada();
}

function sortearAmigo() {
    if (listaAmigo.length === 0) {
        window.alert('Adicione um amigo para o sorteio!');
        return;
    }
    const amigoSorteado = listaAmigo[Math.floor(Math.random() * listaAmigo.length)];
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`; 
}

function limparLista() {
    listaAmigo = [];
    listaAtualizada();
    resultado.innerHTML = '';
}