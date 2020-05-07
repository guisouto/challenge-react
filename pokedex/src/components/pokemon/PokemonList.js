import React, { Component } from 'react'
import pokeapi from '../../services/pokeapi';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    state = {
        pokemon: null
    };

    //executar assim que o component for carregado
    componentDidMount(){
        this.loadPokemons();
    }

    loadPokemons = async () => {
        const response = await pokeapi.get();

        const { results } = response.data;

        this.setState({ pokemon: results });
    };

    render() {
        return (
            <React.Fragment>
            {
            this.state.pokemon ? (
                <div className="row">
                    { this.state.pokemon.map((pokemon, index) => (
                        <PokemonCard 
                            key={index}
                            name={pokemon.name}
                            url={pokemon.url}
                            pokemonIndex={index}
                        />
                        ))
                    }
                </div>
                ) : (
                <h1>Loading</h1>)
            }
            </React.Fragment>
        )
    }
}
