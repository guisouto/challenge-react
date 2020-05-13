import React, { Component } from 'react';

import NavBar from '../../components/layout/NavBar';
import './styles.css'

export default class insertPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                    <NavBar />
                    <div className="insertPokemonContainer">
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                        </form>
                    </div>
            </React.Fragment>
        )
    }
}
