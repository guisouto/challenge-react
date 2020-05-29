import React, { Component } from 'react'
import { getPokemon } from '../../services/pokemon';
import styled from 'styled-components';

import CustomPokemonCard from './CustomPokemonCard';

export default class CustomPokemonList extends Component {
    state = {
        pokemon: [],
    };

    //executar assim que o component for carregado
    componentDidMount(){
        this.loadPokemons();
    }

    loadPokemons = async () => {

        const response = await getPokemon();
        this.setState({ pokemon: response });
    };

    render() {
        return (
            <React.Fragment>
            {
             this.state.pokemon !== null && this.state.pokemon.length > 0 ? (
                <React.Fragment>
                    <div className="row">
                        { this.state.pokemon.map((pkm) => (
                            <CustomPokemonCard 
                                key={pkm.name}
                                name={pkm.name}
                                number={pkm.number}
                                url={pkm.image}
                            />
                            ))
                        }
                    </div>
                </React.Fragment>
                ) : (
                <h1>Loading</h1>)
            }
            </React.Fragment>
        )
    }
}
