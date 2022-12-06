const lista = document.getElementById('corpoPokemon')

const localizacao = location.href.split("?")
const localizarId = new URLSearchParams(localizacao[1]);
const pegarID = localizarId.get('id')

const url = `https://pokeapi.co/api/v2/pokemon/${pegarID}/`

fetch(url)
.then((r) => r.json())
.then((json) => {
    console.log(json)
    trocaVar("{{nome}}", json.name );
    trocaVar("{{numero}}", json.id);
    trocaVar("{{imagem}}", json.sprites.other.dream_world.front_default);
    trocaVar("{{species}}", json.species.name );
    trocaVar("{{height}}", json.height );
    trocaVar("{{weight}}", json.weight );
    
    let tipo = document.querySelector(".tipo-div");
    tipo.innerHTML = json.types.map(e => `<li class="tipo ${e.type.name.trim()}">${e.type.name.trim()}</li>`).join('')

    let tiposCor = document.querySelector(".tiposCor");
    tiposCor.classList.add(json.types[0].type.name)
    console.log(json.types[0].type.name)

    let abilities = document.querySelector(".ability");
    abilities.innerHTML = json.abilities.map(e => e.ability.name).join(', ')
    
    
})


const trocaVar = (key, value) => {
    let ht = document.body.innerHTML;
    document.body.innerHTML = ht.replace(key, value);
}
