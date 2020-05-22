import React, { Component } from 'react';
import pokeapi from '../../services/pokeapi';
import {createPokemon} from '../../services/pokemon'

import NavBar from '../../components/layout/NavBar';
import DragAndDrop from '../../components/layout/DragAndDrop';
import RangeSlider from '../../components/layout/RangeSlider';
import DropdownPokemonType from '../../components/layout/DropdownPokemonType';

import './styles.css';

const TYPE_COLORS = {
    bug: '#B1C12E',
    dark: '#4F3A2D',
    dragon: '#755EDF',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#823551',
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
        themeColor: '#EF5350',
        pokemon: {
            number: '',
            type: '',
            image: '',
            name: '',
            stats: {
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                specialAttack: '',
                specialDefense: ''
            },
            height: '',
            weight: '',
            eggGroups: '',
            catchRate: '',
            abilities: '',
            genderRatioMale: '',
            genderRatioFemale: '',
            evs: '',
            hatchSteps: '',
        }
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

    handleSubmit(event) {
        const data = new FormData(event.target);

        let pokemon = {
            number: data.get('number'),
            type: data.get('types'),
            image: '',
            name: data.get('name'),
            stats: {
                hp: data.get('hp'),
                attack: data.get('attack'),
                defense: data.get('defense'),
                speed: data.get('speed'),
                specialAttack: data.get('spAtk'),
                specialDefense: data.get('spDef')
            },
            height: data.get('height'),
            weight: data.get('weight'),
            eggGroups: data.get('eggGroups'),
            catchRate: data.get('catchRate'),
            abilities: data.get('abilities'),
            genderRatio: data.get('genderRatio'),
            evs: data.get('evs'),
            hatchSteps: data.get('hatchSteps')
        }

        createPokemon(pokemon);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                    <NavBar />
                    <div className="insertPokemonContainer">
                        <form style={{width: "100%"}} onSubmit={this.handleSubmit}>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <input className="form-control" name="number" placeholder="Enter number"/>
                                        </div>
                                        <div className="col-md-7 text-capitalize">
                                            <DropdownPokemonType 
                                                options={this.state.types}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <DragAndDrop/>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Name
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <input className="form-control" name="name" placeholder="Enter name"/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    HP
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider 
                                                        name="hp"/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Attack
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider
                                                        name="attack"/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Defense
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider
                                                        name="defense"/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Speed
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider
                                                        name="speed"/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Sp Atk
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider
                                                        name="spAtk"/>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-3">
                                                    Sp Def
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <RangeSlider
                                                        name="spDef"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col">
                                            <label htmlFor="comment">Description:</label>
                                            <textarea className="form-control" rows="5" id="description" name="description" ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className="card-body">
                                    <h5 className="card-title text-center">Profile</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row align-items-center">
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">Height:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <input className="form-control float-left" id="height" name="height" placeholder="(m)"/>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">Weight:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <input className="form-control float-left" id="weight" name="weight" placeholder="(kg)"/>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">Catch Rate:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <input className="form-control float-left" id="catchRate" name="catchRate" placeholder="(%)"/>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">Gender Ratio:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <RangeSlider
                                                        name="genderRatio"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="row align-items-center">
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">Egg Groups:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <input className="form-control float-left" id="eggGroups" name="eggGroups"/>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">Hatch Steps:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <input className="form-control float-left" id="hatchSteps" name="hatchSteps"/>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">Abilities:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <input className="form-control float-left" id="abilities" name="abilities"/>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <h6 className="float-right">EVs:</h6>
                                                </div>
                                                <div className="col-6 pb-1">
                                                    <input className="form-control float-left" id="evs" name="evs"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer text-muted">
                                    <button className="btn btn-outline-success" type="submit" >Adicionar</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </React.Fragment>
        )
    }
}
