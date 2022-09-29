fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then( resposta => resposta.json())
    .then( regioes => {
        regioes.map( a => {
        document.getElementById('regiao').innerHTML += 
        `
        <option value="${a.id}" id="${a.id}">${a.nome}</option>`
        });
        
    });

const criarListaEstado = (id) => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`)
        .then( resposta => resposta.json())
        .then( res => {

            let nome = document.getElementById(`${id}`).innerHTML;
            aparecerRegiao(nome)

            res.map( a => {
            document.getElementById('estado').innerHTML += 
            `
            <option value="${a.id}" id="${a.id}">${a.nome}</option>`
            });
            
            
        });
};

const criarListaCidade = (id) => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/distritos`)
        .then( resposta => resposta.json())
        .then( res => { 
            let nome = document.getElementById(`${id}`).innerHTML;
            aparecerEstado(nome)

            res.map( a => {
                document.getElementById('cidade').innerHTML +=
                `
                <option value="${a.id}" id="${a.id}">${a.nome}</option>
                `
            });
        });
};

const pegandoValueCidade = (id) => {
    let nome = document.getElementById(`${id}`).innerHTML;
    aparecerCidade(nome)
}


//Funções para fazer aparecer o quadrodos informando a Região, estado e cidade.

const aparecerRegiao = (nome) => {
    let n = document.getElementById('regiaoTexto');
        n.classList.add("aparecer")
        n.classList.add("animate__animated");
        n.classList.add("animate__backInDown");
        n.classList.add("animate__delay-0.5s");

        document.getElementById('regiaoTexto').innerHTML = 
        `
        <h2>Sua Região</h2>
        <p class="fs-2">${nome}</p>
        `
}

const aparecerEstado = (nome) => {
    let n = document.getElementById('estadoTexto');
        n.classList.add("aparecer");
        n.classList.add("animate__animated");
        n.classList.add("animate__backInDown");
        n.classList.add("animate__delay-0.5s");

        document.getElementById('estadoTexto').innerHTML = 
        `
        <h2>Seu Estado</h2>
        <p class="fs-2">${nome}</p>
        `
}

const aparecerCidade = (nome) => {
    let n = document.getElementById('cidadeTexto');
        n.classList.add("aparecer");
        n.classList.add("animate__animated");
        n.classList.add("animate__backInDown");
        n.classList.add("animate__delay-0.5s");

        document.getElementById('cidadeTexto').innerHTML = 
        `
        <h2>Sua Cidade</h2>
        <p class="fs-2">${nome}</p>
        `
}

