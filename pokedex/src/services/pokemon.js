export const POKEMON = 'myPokemons';

export const getPokemon = () => localStorage.getItem(POKEMON);

export const createPokemon = pokemon => {
    localStorage.setItem(POKEMON, JSON.stringify(pokemon));
};