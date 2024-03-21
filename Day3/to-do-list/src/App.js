
import React, { Component } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 
import ListGroup from "react-bootstrap/ListGroup"; 


class App extends Component{
  constructor(props){
    super(props)
    this.state = { 
      userInput: "", 
      list: [], 
  }; 
  }
  updateInput(value){
    this.setState({userInput:value})
  }
  addItem(){
   if(this.state.userInput !==""){
     const userInput={
      id:Math.random(),
      value:this.state.userInput
     }
   const list = [...this.state.list]; 
   list.push(userInput); 

   this.setState({
    list,
    userInput:" "
   })
  } 
}
deleteItem(key){
  const list=[...this.state.list]
  const updatelist=list.filter((item)=>item.id !==key)
  this.setState({
    list:updatelist
  })
}
editItem(index){
  const todos=[...this.state.list]
  const edittodo=prompt('Edit the list')
  if(edittodo !=='' && edittodo.trim() !==""){
    let updatedTodo=[...todos]
    updatedTodo[index].value=edittodo
    this.setState({
      list:updatedTodo
    })
  }
}
render() {
  return(
    <div style={{
      marginTop:"160px",
      textAlign:"center",
      
    }}>
      <h1>Todo List</h1>
      <input onChange={(item)=>this.updateInput(item.target.value)}></input>
      <button onClick={()=>this.addItem()}>Add item</button>
      <ListGroup style={{
        marginLeft:'505px',
        width:"270px",
      }}>
        {this.state.list.map((item,index)=>{
          return(
            <div key={index}>
              <ListGroup.Item action style={{
                display:"flex",
                justifyContent:"space-between",
                
              }} >
              {item.value}
              <span>
              <span>
            <button onClick={()=>this.deleteItem(item.id)}>Delete</button>
              </span>
              <span>
              <button onClick={()=>this.editItem(index)}>Edit</button>
              </span>
              </span>
              </ListGroup.Item>
            </div>

          )
          
        })}
      </ListGroup>
                                       
    </div>
  )
}



  }
  
export default App;
