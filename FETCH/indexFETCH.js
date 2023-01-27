const target = document.getElementById('pokemons');
const btn = document.getElementById('btn-pokemon');
btn.addEventListener('click', getPokemons);


(function(){
    getPokemons();
})();


async function getPokemons() {
    const response = await httpGet("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    showPokemons(response.results);
}

function showPokemons(pokemons)
{
    pokemons.forEach(pokemon => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${pokemon.name}</strong>`;
        target.append( div );
    });
}

async function httpGet(url)
{
    const query = await fetch(url);
    const response = await query.json();

    return response;
}

// fetch(url)
//     .then(response => response.json())
//     .then(data => {

//         const pokemons = data.results;

//         console.log(pokemons)
//     })
// ;

// console.log(pokemons)




// fetch(url)
// .then(Response => Response.json())
// .then(data => {
//     const pokemons = data.Results;

// })