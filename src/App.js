import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    firstValue: 0,
    // currentOperator: "",
    result: 0,
  }
  grabNumber = (number) => { 
    this.setState({
    result: this.state.result + number
    
    })
  }

  // mathFunction = () => {
  //   if(onClick === "="){
  //     this.calculate()
  // }
  // else if(onClick === "clear")

  calculate = () => {
    try {
      this.setState({

        result: (eval(this.state.result) || "") + ""

      })
    } catch (e) {
      this.setState({
        result: "NaN"
      })
    }
  };

  reset = () => {
    this.setState({
      result: 0
    })
  }


  render() {
    return (
      <div className="calculator">
        <div>
          <h1 className="calculator-title">{this.state.result}</h1>
          {/* <p className="calculator-title">{this.state.firstValue}</p> */}
        </div>
        <div className="calculateButtons">
          <div className="row">
            <button className="button2" onClick={()=> this.reset()}>clear</button>
            <button className="button2" onClick={()=> this.grabNumber("/")}>÷</button>
            <button className="button2" onClick={()=> this.grabNumber("*")}>x</button>
          </div>
          <div className="row">
            {/* <button className="button"></button> */}
            <button className="button" onClick={()=> this.grabNumber(8)}>8</button>
            <button className="button" onClick={()=> this.grabNumber(9)}>9</button>
            <button className="button2" onClick={()=> this.grabNumber("-")}>-</button>
          </div>
          <div className="row">
          <button className="button" onClick={()=> this.grabNumber(7)}>7</button>
            <button className="button" onClick={()=> this.grabNumber(5)}>5</button>
            <button className="button2" onClick={()=> this.grabNumber("+")}>+</button>
            
            
          </div>
          <div className="row">
            <button className="button" onClick={()=> this.grabNumber(6)}>6</button>
            <button className="button" onClick={()=> this.grabNumber(1)}>1</button>
            <button className="button" onClick={()=> this.grabNumber(2)}>2</button>
          </div>
          <div className="row">
            <button className="button" onClick={()=> this.grabNumber(3)}>3</button>
            <button className="button" onClick={()=> this.grabNumber(0)}>0</button>
            <button className="button" onClick={()=> this.grabNumber(4)}>4</button>
          </div>
          <div className="row2">
            <button className="clearButton" onClick= {()=> this.calculate(this.result)}>=</button>
          </div>
        </div>

      </div>
    )
  }
}
export default App;
