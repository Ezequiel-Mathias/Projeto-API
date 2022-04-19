'use strict'


const PesquisarSuperHeroisimg = async (caixadepesquisa) =>{
    const url = `https://www.superheroapi.com/api.php/3074978376084161/search/${caixadepesquisa}`

    const resposta = await fetch(url)

    const data = await resposta.json()
    
    return data
     
}


const CriarCard = ({ image,biography , name , powerstats }) => {
    const card = document.createElement('div')
    card.innerHTML = `
    
    <div class="divcard" id="divcard">
    <span class="card-produtora">${biography.publisher}</span>
    <div id='card-img'>
        <img id="img" src="${image.url}" alt="">
    </div>
        <span class="card-nome">${name}</span>
        <span class="card-detalhes"> ${biography.aliases}</span>
        <span class="card-detalhes">Inteligencia:${powerstats.intelligence}</span>
        <span class="card-detalhes">Força:${powerstats.strength}</span>
        <span class="card-detalhes">Rapidez:${powerstats.speed}</span>
        <span class="card-detalhes">Durabilidade:${powerstats.durability}</span>
        <span class="card-detalhes">Poder:${powerstats.power}</span>
        <span class="card-detalhes">Combat:${powerstats.combat}</span>
    <div>
    <div>   
       

    </div>
    `
    return card
}




const CarregarHerois = async () => {

    const container = document.getElementById("cards")

    const caixadepesquisa = document.getElementById('caixadepesquisa').value

    const herois = await PesquisarSuperHeroisimg(caixadepesquisa)
    console.log(herois)

    const resultadoherois = herois.results.map(CriarCard)

    container.replaceChildren(...resultadoherois)
}



document.addEventListener("keypress", function(CarregarHerois){

    const caixadepesquisa = document.getElementById('caixadepesquisa').value

    if(CarregarHerois.key && caixadepesquisa.length > 2){
        var btn = document.getElementById('pesquisar')
        btn.click()
    }
    
});




document.getElementById('pesquisar').addEventListener('click', CarregarHerois)









  
