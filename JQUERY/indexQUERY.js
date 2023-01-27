"use strict";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');
const btn = document.getElementById('btn-pokemon');

btn.addEventListener('click', getPokemons);

function getPokemons()
{
    $.ajax(url, {
        method: "GET",
        success: function(response)
        {
            const pokemons = response.results;

            pokemons.forEach(pokemon => {

                const a = document.createElement('li');
                      a.innerText = pokemon.name

                target.append(a);
            });
        },
        error: function(event)
        {
            target.innerText = "Oooops... Les pokémons ont disparus."
        }

    });
}