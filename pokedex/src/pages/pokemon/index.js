import React, { Component } from 'react';

import NavBar from '../../components/layout/NavBar';
import PokemonDetails from '../../components/pokemon/PokemonDetails';

import './styles.css'

export default class index extends Component {
    state = {
        pokemonIndex: ''
    }

    componentDidMount(){
        //Get index to url
        const {pokemonIndex} = this.props.match.params;

        this.setState({pokemonIndex});
    }

    render() {
        return (
            <React.Fragment>
            {
            this.state.pokemonIndex ? (
                <React.Fragment>
                    <NavBar />
                    <div className="pokemonContainer">
                        <PokemonDetails  
                            pokemonIndex={this.state.pokemonIndex}
                        />
                    </div>
                </React.Fragment>
                ) : (
                <h1>Loading</h1>)
            }
            </React.Fragment>
        )
    }
}
