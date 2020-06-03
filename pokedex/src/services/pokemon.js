export const POKEMON = 'myPokemons';

export const getPokemon = () => JSON.parse(localStorage.getItem(POKEMON));

export const getPokemonById = id => {
    let localpokemons = JSON.parse(localStorage.getItem(POKEMON));

    return localpokemons.find(pkm => pkm.number == id);
}

export const createPokemon = pokemon => {

    let localpokemons = JSON.parse(localStorage.getItem(POKEMON));

    let pokemons = [];

    if(localpokemons)
        pokemons = localpokemons;

    pokemons.push(pokemon);    

    localStorage.setItem(POKEMON, JSON.stringify(pokemons));
};

export const deletePokemonById = id => {
    let localpokemons = JSON.parse(localStorage.getItem(POKEMON));

    let pokemon = localpokemons.find(pkm => pkm.number == id)

    let index = localpokemons.indexOf(pokemon);

    localpokemons.splice(index, 1);

    localStorage.setItem(POKEMON, JSON.stringify(localpokemons));
}