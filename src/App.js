import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    counter: 0,
  }

  mathFunction = () => {

  }



  render() {
    return (
      <div className="calculator">
        <div>
          <h1 className="calculator-title">{this.state.counter}</h1>
        </div>
        <div className="calculateButtons">
          <div className="row">
            <button className="button">clear</button>
            <button className="button">÷</button>
            <button className="button">x</button>
          </div>
          <div className="row">
            {/* <button className="button"></button> */}
            <button className="button">8</button>
            <button className="button">9</button>
            <button className="button">-</button>
          </div>
          <div className="row">
          <button className="button">7</button>
            <button className="button">5</button>
            <button className="button">+</button>
            
            
          </div>
          <div className="row">
            <button className="button">6</button>
            <button className="button">1</button>
            <button className="button">2</button>
          </div>
          <div className="row">
            <button className="button">3</button>
            <button className="button">0</button>
            <button className="button">4</button>
          </div>
          <div className="row2">
            <button className="clearButton">=</button>
          </div>
        </div>

      </div>
    )
  }
}
export default App;
