import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {deletePokemon} from '../../services/pokemon';

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

const DivButtons = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        border-radius: 3px;
        border: 0;
        background: #fc6963;
        color: #FFF;
        font-size: 12px;
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

export default class CustomPokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    }

    componentDidMount() {
        const { name, url, number } = this.props;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;
        this.setState({name, imageUrl, pokemonIndex: number});
        //To have access to state and props
        this.removePokemon = this.removePokemon.bind(this);
    }

    removePokemon() {
        this.props.callbackFromParent(this.state.pokemonIndex);
    }

    editPokemon() {

    }

    render() {

        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <Card className="card">
                    <StyledLink to={`customPokemon/${this.state.pokemonIndex}`}>
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        <Sprite
                            className="card-img-top rounded mx-auto mt-2" 
                            src={this.state.imageUrl}
                        />
                        <div className="card-body">
                            <h6 className="card-title text-capitalize">{this.state.name}</h6> 
                        </div>
                    </StyledLink>
                    <div className="card-footer text-muted">
                        <button onClick={this.editPokemon} >Editar</button>
                        <button onClick={this.removePokemon} >Excluir</button>
                    </div>
                </Card>
        </div>
        )
    }
}
