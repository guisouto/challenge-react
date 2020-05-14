import React, { Component } from 'react';

import NavBar from '../../components/layout/NavBar';
import DragAndDrop from '../../components/layout/DragAndDrop';
import RangeSlider from '../../components/layout/RangeSlider';
import './styles.css';


export default class insertPokemon extends Component {
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
                                            <div style={{display: "flex"}}>
                                                <div className="col-md-6 form-group">
                                                <label htmlFor="sel1">Type:</label>
                                                    <select className="form-control" id="sel1">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 form-group">
                                                <label htmlFor="sel2">Type2:</label>
                                                    <select className="form-control" id="sel2">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                            </div>
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
                                                    <h6 className="float-left"> m.</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Weight:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left"> kg</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Catch Rate:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left"> %</h6>
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
                                                    <h6 className="float-left text-capitalize"> text </h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Hatch Steps:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left"> text</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">Abilities:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left text-capitalize"> text </h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-right">EVs:</h6>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="float-left text-capitalize"> text </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer text-muted">
                                    Data From My Head
                                </div>
                            </div>
                        </form>
                    </div>
            </React.Fragment>
        )
    }
}
