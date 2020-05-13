import React, { Component } from 'react'
import pokeapi from '../../services/pokeapi';
import styled from 'styled-components';

import PokemonCard from './PokemonCard';

const DivButtons = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        padding: 10px;
        border-radius: 5px;
        border: 0;
        background: #fc6963;
        color: #FFF;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        &:disabled{
            opacity: 0.5;
            cursor:default;
            &:hover{
                opacity: 0.5;
            }
        }
        &:hover{
            opacity: 0.7;
        }
    }
`;
//bl

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
            <React.Fragment>
            {
             this.state.pokemon.length > 0 ? (
                <React.Fragment>
                    <div className="row">
                        { this.state.pokemon.map((pkm) => (
                            <PokemonCard 
                                key={pkm.name}
                                name={pkm.name}
                                url={pkm.url}
                            />
                            ))
                        }
                    </div>
                    <DivButtons>
                        <button disabled={previousPage === null}  onClick={this.prevPage}>Anterior</button>
                        <button disabled={nextPage === null} onClick={this.nextPage}>Próximo</button>
                    </DivButtons>
                </React.Fragment>
                ) : (
                <h1>Loading</h1>)
            }
            </React.Fragment>
        )
    }
}
