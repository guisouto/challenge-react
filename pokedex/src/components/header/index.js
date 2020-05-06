import React, { Component } from 'react';
import './styles.css';
import Imagem from '../../assets/pokeapi.png';

class Header extends Component {
    render() {
        return (
            <header id="main-header">
                <img src={Imagem} alt="PokeApi" ></img>
            </header>
        )
    }
}

export default Header;