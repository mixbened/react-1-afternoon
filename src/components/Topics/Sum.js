import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            inputOne: 0,
            inputTwo: 0,
            result: null,
        }
    }

    handleOne(i){
        this.setState(() => {
            return {
            inputOne: i,
            }
        })
    }

    handleTwo(e){
        this.setState(() => {
            return {
            inputTwo: e,
            }
        })
    }
    
    calculateStuff(num1,num2){
        let solution = parseInt(num1, 10) + parseInt(num2, 10);
        this.setState(()=> {
            return {
                result: solution,
            }
        })
    }

        render(){
            return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={event1 => this.handleOne(event1.target.value)}/>
                <input className="inputLine" onChange={event2 => this.handleTwo(event2.target.value)}/>
                <button className="confirmationButton" onClick={e => this.calculateStuff(this.state.inputOne, this.state.inputTwo)}>Solve</button>
                <span className="resultsBox">{this.state.result}</span>
            </div>
        )
    }
}

export default Sum