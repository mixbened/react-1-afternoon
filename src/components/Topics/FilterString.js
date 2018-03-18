import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ["Hey", 'this', 'is', 'Awesome'],
            userInput: '',
            filteredArray: '',
        }
    }

    handleInput(i){
        this.setState(() => {
            return {
            userInput: i,
            } 
        })
    }

    filterString(input){
        let unfilteredArray = this.state.unfilteredArray;
        let newArray = [];
        for(let i=0; i < unfilteredArray.length; i++){
            if(unfilteredArray[i].indexOf(input)>=0){
            newArray.push(unfilteredArray[i]);
            }
        }
    
        this.setState(() => {
            return {
                filteredArray: newArray,
                }
            })
    }

        render(){
            return (
                <div className="puzzleBox filterStringPB">
                    <h4>Filter String</h4>
                    <input className="inputLine" onChange={e => this.handleInput(e.target.value)}/>
                    <span className="puzzleText">Given Text: {JSON.stringify(this.state.unfilteredArray)}</span>
                    <button className="confirmationButton" onClick={e => this.filterString(this.state.userInput)}>Solve</button>
                    <span className="resultsBox filterStringRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
                </div>
        )
    }
}

export default FilterString