import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }

  increament=()=>{ 
    this.setState((prevState)=>({counter:prevState.counter+1}))
  }
  decreament=()=>{ 
    if(this.state.counter===0){
            this.setState((prevState) => ({
                counter: prevState.counter+ 1,
            }));
        }

    this.setState((prevState)=>({counter:prevState.counter-1}))
  }
  render(){
    return(
      <div>
      <h1>No of times you Click{this.state.counter}</h1>
      <button onClick={this.increament}>+</button>
      <button onClick={this.decreament}>-</button>
      </div>

    )
  }




}

export default App;
