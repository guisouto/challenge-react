export const POKEMON = 'myPokemons';

export const getPokemon = () => localStorage.getItem(POKEMON);

export const createPokemon = pokemon => {

    let localpokemons = JSON.parse(localStorage.getItem(POKEMON));

    let pokemons = [];

    if(localpokemons)
        pokemons = localpokemons;

    pokemons.push(pokemon);    

    localStorage.setItem(POKEMON, JSON.stringify(pokemons));
};