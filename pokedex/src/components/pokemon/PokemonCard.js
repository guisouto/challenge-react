import React, { Component } from 'react'
import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em,
    height: 5em
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    }

    componentDidMount() {
        const { name, pokemonIndex } = this.props;
        const index = pokemonIndex + 1;
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png`;

        this.setState({name, imageUrl, pokemonIndex: index});
    }

    render() {

        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <h5 className="card-header">{this.state.pokemonIndex}</h5>
                    <Sprite
                        className="card-img-top rounded mx-auto mt-2" 
                        src={this.state.imageUrl}
                    />
                    <div className="card-body">
                        <h6 className="card-title text-capitalize">{this.state.name}</h6> 
                    </div>
                </div>
            </div>
        )
    }
}
