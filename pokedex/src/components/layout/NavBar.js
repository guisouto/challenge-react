import React, { Component } from 'react';
import styled from 'styled-components';

const DivNavBar = styled.div`
    padding-top: 4em
`;

export default class NavBar extends Component {
    render() {
        return (
            <DivNavBar>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                   <a href="/app" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">Pokedex</a> 
                </nav>
            </DivNavBar>
        )
    }
}
