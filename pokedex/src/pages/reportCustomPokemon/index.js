import React, { Component } from 'react'
import NavBar from '../../components/layout/NavBar'
import CustomPokemonList from '../../components/pokemon/CustomPokemonList'

import "./styles.css";

export default class reportCustomPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="customReportContainer">
                    <div className="row">
                        <div className="col">
                            <CustomPokemonList/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
