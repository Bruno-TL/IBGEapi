fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then( resposta => resposta.json())
    .then( regioes => {
        regioes.map( (a) => {
        document.getElementById('regiao').innerHTML += 
        `
        <option>${a.nome}</option>
        `});
    })


