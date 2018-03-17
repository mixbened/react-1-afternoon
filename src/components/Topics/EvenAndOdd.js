import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
          evenArray: [],
          oddArray: [],
          userInput: '',
        }
    }

    changeUserInput(value){
        this.setState(() => {
            return {
                userInput: value,
            }
        })
    }

    solveProblem(solution){
        let wholeArray = solution.split('');
        let evens = [];
        let odds = [];
        for(let i=0; i < wholeArray.length; i++ ){
            if(wholeArray[i] % 2 === 0) {
                evens.push(parseInt(wholeArray[i],10));
            } else {
                odds.push(parseInt(wholeArray[i], 10));
          }
        }
        this.setState(() => {
            return {
                evenArray: evens,
                oddArray: odds,
            }
        })
        
    }


        render(){
            return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={event => this.changeUserInput(event.target.value)}/>
                <button className="confirmationButton" onClick={event => this.solveProblem(this.state.userInput)}>Solve</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>  
        )
    }
}

export default EvenAndOdd