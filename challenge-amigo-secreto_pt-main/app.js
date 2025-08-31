let amigos = [];
let listaDeNomesSorteados = [];

function exibirTextoNaTela(tag, texto){
    let mensagem = document.querySelector(tag);
    if(mensagem){
        mensagem.innerText = texto;
    }
}
function adicionarAmigo(){
    //nao precisa usar '#' no 'input' porque não esta selecionando um id
    let nome = document.querySelector('input').value;

    if(nome == ''){
        //querySelector somente pega o id do elemento se colocar o'#' na tag
        exibirTextoNaTela('#resultado','Insira um nome válido!');
        return
    }else{
        amigos.push(nome);
        limparCampo();
        exibirLista();
    }
}

function sortearAmigo(){
    if(amigos.length < 2){
        exibirTextoNaTela('#resultado', 'Insira mais nomes para realizar o sorteio!');
        return
    }
    let resultadoSorteio = Math.floor((Math.random() * amigos.length));
    let amigoSorteado = amigos[resultadoSorteio];

    if(listaDeNomesSorteados.includes(amigoSorteado)){
        return sortearAmigo();
    }else{
        listaDeNomesSorteados.push(amigoSorteado);
        //poderia usar innerText ja que peguei o elemento por id e o innerHTML só recebe texto.
        document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    }
}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function exibirLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    //percorre o array amigos e adiciona cada item no conteudo do elemento HTML lista
    //mostrando na tela os nomes adicionados 
    for ( i = 0 ; i < amigos.length; i++){
        lista.innerHTML += amigos[i] + '<br>';
        //'<br>' quebra a linha (não recomendado para usar com css)
    }
}
