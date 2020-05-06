import React, { Component } from "react";

import pokeapi from '../../services/pokeapi';

import "./styles.css";

class Report extends Component {
    state = {
        pokemons: [],
        previousPage: "",
        nextPage: ""
    };

    //executar assim que o component for carregado
    componentDidMount(){
        this.loadPokemons(`/pokemon?limit=20&offset=0`);
    }

    loadPokemons = async (params) => {
        const response = await pokeapi.get(`${params}`);

        const { results, next, previous } = response.data;

        this.setState({ pokemons: results, previousPage: previous, nextPage: next });
    };

    prevPage = () => {
        const { previousPage } = this.state;

        if(previousPage === null) return;

        this.loadPokemons(previousPage);
    }

    nextPage = () => {
        const { nextPage } = this.state;
        console.log(this.state)

        if(nextPage === null) return;

        this.loadPokemons(nextPage);
    }

    render() {
        const { pokemons, previousPage, nextPage } = this.state; 
        return (
            <div className="pokemon-list">
                { pokemons.map((pokemon, index) => (
                    <article key={index}>
                        <strong>{pokemon.name}</strong>
                        <p>{pokemon.url}</p>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={previousPage === null}  onClick={this.prevPage}>Anterior</button>
                    <button disabled={nextPage === null} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}

export default Report;