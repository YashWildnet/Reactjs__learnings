
import React from "react"
function Fruits(props){
    return(
        <div>
        <h1>List of Fruits</h1>
        <p>Fruits:{props.fruits.fruit}</p>
        <p>Colors:{props.fruits.color}</p>   
        </div>
    )
}
class Car extends React.Component{
    constructor(){
        super()
        this.state={
            car:"ferari",
        }
    }
    changeName(){
        if(this.state.car==="ferari"){
        this.setState({
            car:"Mustang"
        })
    }
    else{
        this.setState({
            car:"ferari"
        })

    }
    }
    render(){
        return(
            <div>
                <h2>Car name is {this.state.car}</h2>
                <button onClick={()=>this.changeName()}>Change</button>
            </div>
        )
    }

}
function App(){
    const state ={car:"musta"}
    const naming={
        fruit:"Apple",
        color:"red"
    }
    return(
        <div>
          
        <Fruits fruits={naming}/>
        <hr></hr>
        <Car/>
        </div>
    )
}
export default App