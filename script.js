gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
       
        let fHtml = '';

        fHtml += '<img alt="' + data.name + '" src="' + data.image + '"></div>'
        fHtml += '<ul id="detalhes-container">'
        fHtml += '<li>Nome: ' + data.name + '</li>'
        fHtml += '<li>Espécie: ' + data.species + '</li>'
        fHtml += '<li>Esta vivo?: ' + data.status + '</p></li>'
        fHtml += '</ul>'

        document.getElementById("mostrarChar").innerHTML += fHtml;
    });
} 

document.getElementById("botao").onclick = function() { 
		
    document.getElementById("mostrarChar").innerHTML = '';

    for(var n = 0; n < 3; n++) {
        pegarPersonagem();
    }
};  