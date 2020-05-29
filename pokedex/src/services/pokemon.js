export const POKEMON = 'myPokemons';

export const getPokemon = () => JSON.parse(localStorage.getItem(POKEMON));

export const getPokemonById = id => {
    let localpokemons = JSON.parse(localStorage.getItem(POKEMON));

    return localpokemons.map(pkm => pkm.number == id);
}

export const createPokemon = pokemon => {

    let localpokemons = JSON.parse(localStorage.getItem(POKEMON));

    let pokemons = [];

    if(localpokemons)
        pokemons = localpokemons;

    pokemons.push(pokemon);    

    localStorage.setItem(POKEMON, JSON.stringify(pokemons));
};

export const deletePokemon = pokemon => {

    let localpokemons = JSON.parse(localStorage.getItem(POKEMON));

    localpokemons.splice(pokemon);

    localStorage.setItem(POKEMON, JSON.stringify(localpokemons));
}