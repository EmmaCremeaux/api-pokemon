"use strict";

//Definition de l'url cible
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

// Cible le noeud HTML pour afficher la liste des pokemons
const pokeName = document.getElementById('pokemons');

// Cible le noeud HTML representant le boutons
const btn = document.getElementById('btn-pokemon');

// Ecoute le "click" sur le bouton
// > déclenche la fonction "getpokemon"
btn.addEventListener('click', getPokemons);


// Declaration de la fonction "getPokemons"
function getPokemons()
{

// Instance de l'objet XHR    
const xhr = new XMLHttpRequest();

// Preparer la requete
xhr.open("GET", url);


xhr.onreadystatechange = function() {
    console.log(xhr.responseText);
  };


xhr.onload = function()
    {
        switch (xhr.status)
        {
            case 200:
            
                // Reponse de la requete
                const response = xhr.response;

                // Convertion json de l'objet de la reponse
                const json = JSON.parse(response);

                // Recup de la propriété "results" de l'api Pokemon
                const pokemons = json.results;

                pokemons.forEach(pokemon => {

                    const a = document.createElement('li');
                          a.innerText = pokemon.name
                          

                    pokeName.append(a);
                });

            break;

            case 404:
                pokeName.innerText = "Oooops... Les pokémons ont disparus."
            break;
        }
    }

    




xhr.send();
}

