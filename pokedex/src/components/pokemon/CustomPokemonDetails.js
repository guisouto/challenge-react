import React, { Component } from 'react'
import { getPokemonById } from '../../services/pokemon';

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };
  

export default class CustomPokemonDetails extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        statTitleWidth: 3,
        statBarWidth: 9,
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
        themeColor: '#EF5350'
      };

    async componentDidMount() {
        const {pokemonIndex} = this.props;

        const pokemon = getPokemonById(pokemonIndex);

        const types = pokemon.type.map(type => type.value);

        const themeColor = `${TYPE_COLORS[types[types.length - 1]]}`;

        const femaleRate = pokemon.genderRatio;
        const genderRatioFemale = Math.round(12.5 * femaleRate);
        const genderRatioMale = Math.round(12.5 * (8 - femaleRate));

        this.setState({
            imageUrl: pokemon.image,
            pokemonIndex,
            name: pokemon.name,
            types,
            stats: {
              hp: pokemon.stats.hp,
              attack: pokemon.stats.attack,
              defense: pokemon.stats.defense,
              speed: pokemon.stats.speed,
              specialAttack: pokemon.stats.specialAttack,
              specialDefense: pokemon.stats.specialDefense
            },
            themeColor,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities,
            evs: pokemon.evs,
            description: pokemon.description,
            genderRatioFemale,
            genderRatioMale,
            catchRate: pokemon.catchRate,
            eggGroups: pokemon.eggGroups,
            hatchSteps: pokemon.hatchSteps
          });
    }

    render() {
        return (
          <div className="col">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-5">
                    <h5>{this.state.pokemonIndex}</h5>
                  </div>
                  <div className="col-7">
                    <div className="float-right">
                      {this.state.types.map(type => (
                        <span
                          key={type}
                          className="badge badge-pill mr-1 text-capitalize"
                          style={{
                            backgroundColor: `#${TYPE_COLORS[type]}`,
                            color: 'white'
                          }}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className=" col-md-3 ">
                    <img
                      src={this.state.imageUrl}
                      className="card-img-top rounded mx-auto mt-2"
                    />
                  </div>
                  <div className="col-md-9">
                    <h4 className="mx-auto text-capitalize">
                      {this.state.name}
                    </h4>
                    <div className="row align-items-center">
                      <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                        HP
                      </div>
                      <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.hp}%`,
                              backgroundColor: `#${this.state.themeColor}`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.hp}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                        Attack
                      </div>
                      <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.attack}%`,
                              backgroundColor: `#${this.state.themeColor}`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.attack}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                        Defense
                      </div>
                      <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.defense}%`,
                              backgroundColor: `#${this.state.themeColor}`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.defense}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                        Speed
                      </div>
                      <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.speed}%`,
                              backgroundColor: `#${this.state.themeColor}`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.speed}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                        Sp Atk
                      </div>
                      <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.specialAttack}%`,
                              backgroundColor: `#${this.state.themeColor}`
                            }}
                            aria-valuenow={this.state.stats.specialAttack}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.specialAttack}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                        Sp Def
                      </div>
                      <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.specialDefense}%`,
                              backgroundColor: `#${this.state.themeColor}`
                            }}
                            aria-valuenow={this.state.stats.specialDefense}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.specialDefense}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col">
                    <p>{this.state.description}</p>
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
                        <h6 className="float-left">{this.state.height} m.</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Weight:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.weight} kg</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Catch Rate:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.catchRate}%</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Gender Ratio:</h6>
                      </div>
                      <div className="col-6">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.genderRatioFemale}%`,
                              backgroundColor: '#c2185b'
                            }}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.genderRatioFemale}</small>
                          </div>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.genderRatioMale}%`,
                              backgroundColor: '#1976d2'
                            }}
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.genderRatioMale}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="float-right">Egg Groups:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left text-capitalize">{this.state.eggGroups} </h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Hatch Steps:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.hatchSteps}</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Abilities:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left text-capitalize">{this.state.abilities}</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">EVs:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left text-capitalize">{this.state.evs}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                Custom Pokemon
              </div>
            </div>
          </div>
        );
      }
}