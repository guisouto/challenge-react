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
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.sliderInputCase = this.sliderInputCase.bind(this);
        this.state = { value: '' };
    }

    componentDidMount(){
        console.log(this.props.editValue);

        this.setState({ value: this.sliderRef.current.value });
    }

    sliderInputCase() {
        this.setState({ value: this.sliderRef.current.value });
    }

    render() {
        return (
            <div style={{width: "100%", display:"flex", alignItems:"center"}}>
                <SliderInput type="range" min="1" max="100" id="myRange" name={this.props.name} ref={this.sliderRef} onClick={this.sliderInputCase}/>
                <span id="rangeValue" name="rangeValue">{ this.state.value }</span>
            </div>      
        )
    }
}
