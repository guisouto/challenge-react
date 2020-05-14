import React, { Component } from 'react';
import styled from 'styled-components';

const SliderInput = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;  
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%; 
        background: #4CAF50;
        cursor: pointer;
    }
    ::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
    }
`

export default class RangeSlider extends Component {
    sliderRef = React.createRef();
    valueRef = React.createRef();

    render() {
        return (
            <div style={{width: "100%", display:"flex", alignItems:"center"}}>
                <SliderInput type="range" min="1" max="100" id="myRange" ref={this.sliderRef}/>
                <span id="rangeValue">10</span>
            </div>      
        )
    }
}
