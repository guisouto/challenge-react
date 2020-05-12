import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Sprite = styled.img`
    width: 5em,
    height: 5em
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select:none;
    -website-user-select: none;
    user-select:none;
    -o-user-select:none;
`;
//bloqueio de arrastar a imagem: -moz-user-select:none;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:active{
        text-decoration:none;
    }
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
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

        this.setState({name, imageUrl, pokemonIndex: index});
    }

    render() {

        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                    <Card className="card">
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        <Sprite
                            className="card-img-top rounded mx-auto mt-2" 
                            src={this.state.imageUrl}
                        />
                        <div className="card-body">
                            <h6 className="card-title text-capitalize">{this.state.name}</h6> 
                        </div>
                    </Card>
                </StyledLink>
            </div>
        )
    }
}
