import React, { Component } from 'react'
import pokeapi from '../../services/pokeapi';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    state = {
        pokemon: [],
        previousPage: "",
        nextPage: ""
    };

    //executar assim que o component for carregado
    componentDidMount(){
        const url = "pokemon/";
        this.loadPokemons(url);
    }

    loadPokemons = async (url) => {

        const response = await pokeapi.get(`${url}`);

        const { results, next, previous } = response.data;

        this.setState({ pokemon: results, previousPage: previous, nextPage: next });
    };

    prevPage = () => {
        const { previousPage } = this.state;

        if(previousPage === null) return;

        this.loadPokemons(previousPage);
    }

    nextPage = () => {
        const { nextPage } = this.state;
        
        if(nextPage === null) return;

        this.loadPokemons(nextPage);
    }

    render() {
        const { previousPage, nextPage } = this.state; 
        return (
            <div>
            {
             this.state.pokemon.length > 0 ? (
                <div>
                    <div className="row">
                        { this.state.pokemon.map((pkm, index) => (
                            <PokemonCard 
                                key={index}
                                name={pkm.name}
                                url={pkm.url}
                                pokemonIndex={index}
                            />
                            ))
                        }
                    </div>
                    <div className="actions">
                        <button disabled={previousPage === null}  onClick={this.prevPage}>Anterior</button>
                        <button disabled={nextPage === null} onClick={this.nextPage}>Próximo</button>
                    </div>
                </div>
                ) : (
                <h1>Loading</h1>)
            }
            </div>
        )
    }
}
