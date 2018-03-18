import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            result: '',
        }
    }

    handleInput(e){
        this.setState(() => {
            return {
            userInput: e,
        }
        })
    }

    testPalindrome(str){
        let result;
        let str2 = str.split('').reverse().join('');
        if(str === str2){
            result = true;
           } else {
            result = false;
           }
        this.setState(() => {
            return {
                result: result,
            }
        })
    }

        render(){
            return (
            <div className="puzzleBox filterStringPB">
                <h4 >Palindrome</h4>
                <input onChange={e => this.handleInput(e.target.value)} className="inputLine"/>
                <button onClick={e => this.testPalindrome(this.state.userInput)} className="confirmationButton">Solve</button>
                <span className="resultsBox">Result: {JSON.stringify(this.state.result)}</span>
            </div>  
        )
    }
}

export default Palindrome