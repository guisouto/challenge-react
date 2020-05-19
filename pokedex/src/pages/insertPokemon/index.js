import React, { Component } from 'react';
import pokeapi from '../../services/pokeapi';

import NavBar from '../../components/layout/NavBar';
import DragAndDrop from '../../components/layout/DragAndDrop';
import RangeSlider from '../../components/layout/RangeSlider';

import Select from "react-dropdown-select";

import './styles.css';

const TYPE_COLORS = {
    bug: '#B1C12E',
    dark: '#4F3A2D',
    dragon: '#755EDF',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#823551D',
    fire: '#E73B0C',
    flying: '#A3B3F7',
    ghost: '#6060B2',
    grass: '#74C236',
    ground: '#D3B357',
    ice: '#A3E7FD',
    normal: '#C8C4BC',
    poison: '#934594',
    psychic: '#ED4882',
    rock: '#B9A156',
    steel: '#B5B5C3',
    water: '#3295F6'
  };

export default class insertPokemon extends Component {
    state = { 
        types: [{
            key: '',
            value: '',
            label: '',
            color: ''
        }],
        themeColor: '#EF5350'
    }

    componentDidMount() {
        const url = "type?limit=18";
        this.loadPokemonType(url);
    }

    loadPokemonType = async (url) => {

        const response = await pokeapi.get(`${url}`);
        const { results } = response.data;
        
        let types = []

        results.map((type, index) => (
            types.push({ key: index, value: type.name, label: type.name, color: TYPE_COLORS[type.name] })
        ));

        this.setState({ types });
    };

    render() {
        return (
            <React.Fragment>
                    <NavBar />
                    <div className="insertPokemonContainer">
                        <form style={{width: "100%"}}>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h5>Número</h5>
                                        </div>
                                        <div className="col-md-7">
                                            <Select
                                                options={this.state.types}
                                                label="Type"
                                                isMulti
                                                styles={colourStyles}
                                                onChange={(value) => console.log(value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <DragAndDrop>
                                                
                                            </DragAndDrop>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Name
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <input className="form-control" id="name" placeholder="Enter name"/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    HP
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Attack
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Defense
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Speed
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Sp Atk
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Sp Def
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col">
                                            <label htmlFor="comment">Description:</label>
                                            <textarea className="form-control" rows="5" id="comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className="card-body">
                                    <h5 className="card-title text-center">Profile</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h6 className="float-right">Height:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input className="form-control float-left" id="height" placeholder="(m)"/>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Weight:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input className="form-control float-left" id="weight" placeholder="(kg)"/>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Catch Rate:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input className="form-control float-left" id="catchRate" placeholder="(%)"/>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Gender Ratio:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <RangeSlider/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h6 className="float-right">Egg Groups:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input className="form-control float-left" id="eggGroups"/>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Hatch Steps:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input className="form-control float-left" id="hatchSteps"/>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Abilities:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input className="form-control float-left" id="abilities"/>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">EVs:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input className="form-control float-left" id="evs"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer text-muted">
                                    <button>Adicionar</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </React.Fragment>
        )
    }
}
