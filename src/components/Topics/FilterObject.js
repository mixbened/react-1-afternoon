import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'Peter',
                    age: 30,
                    hobby: 'Icehockey'
                },
                {
                    name: 'Fran',
                    age: 17,
                    hobby: 'Soccer',
                },
                {
                    name: 'Jupiter',
                    age: 8,
                    title: 'Doctor',
                }
            ],
            userInput: '',
            filteredArray: [],
        }

    }

    updateInput(e){
        this.setState(() => {
            return {
                userInput: e,
            }
        })
    }

    confirmInput(input){
        let unFilteredArray = this.state.unFilteredArray;
        let newArray = unFilteredArray.slice();
        for(let i = unFilteredArray.length-1; i >= 0; i--){
            for(let prop in unFilteredArray[i]){
                if(prop === input){
                    newArray.splice(i, 1);
                }
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
                <div className="puzzleBox filterObjectPB">
                    <h4>Filter Object</h4>
                    <span className="puzzleText"></span>
                    <input className="inputLine" onChange={event => this.updateInput(event.target.value)}/>
                    <button className="confirmationButton" onClick={event => this.confirmInput(this.state.userInput)}>Solve</button>
                    <span className="resultsBox filterObjectRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
                </div>
        )
    }
}

export default FilterObject