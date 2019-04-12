import React, { Component } from 'react'

export default class Sum extends Component{
    constructor(){
        super();

        this.state={
            num1: 0,
            num2: 0,
            sum: 0
        }
    }

    updateNum1(val){
        this.setState({num1: parseInt(val, 10)})
    }

    updateNum2(val){
        this.setState({num2: parseInt(val, 10)})
    }

    add(n1, n2){
        console.log(n1, n2);
        this.setState({ sum: n1 + n2 })
    }
    render(){
        return (
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" type="number" onChange={ (event) => this.updateNum1(event.target.value) }></input>
            <input className="inputLine" type="number" onChange={ (event) => this.updateNum2(event.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.add(this.state.num1, this.state.num2) }> Add </button>
            <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}