import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { 
    value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3 : Math.floor(Math.random() * 100),
    numQuestions : 0,
    numCorrect   : 0
  };



  checkAnswer = (guess, proposedAnswer, answer) => {
      let correct = 0;
      if (( proposedAnswer == answer && guess ) || ( proposedAnswer != answer && !guess )) {
          correct = 1;
      }
      this.setState((currentState) => ({
          numCorrect: currentState.numCorrect + correct,
          numQuestions: currentState.numQuestions + 1,
          value1 : Math.floor(Math.random() * 100),
          value2 : Math.floor(Math.random() * 100),
          value3 : Math.floor(Math.random() * 100),
      }))
  }




  render() {
    let proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    let answer         = this.state.value1 + this.state.value2 + this.state.value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(1, proposedAnswer, answer)}>True</button>
          <button onClick={() => this.checkAnswer(0, proposedAnswer, answer)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
