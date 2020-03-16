import React from 'react'
import style from './todolist.module.css'
import Newtodo from './components/Newtodo'
import Todo from './components/Todo'
let id = 1


class Todolist extends React.Component {

state={
  todos:[{ticket:true,name:'wast',},{ticket:0,name:'กรรกไกร',}],
  textValue:''
}

handledelete = ()=>{
  alert('delete   ')
}
handletick = ()=>{ 
  alert('tick   ')
}
handleonValue = (e)=>{
  this.setState({
    textValue:e.target.value
  })
  
}
handleonadd = (e)=>{
  const {name } =this.state.todos
 
  this.setState({
    name:this.todos.concat({name:this.state.textValue})
  })
  console.log(this.state.textValue);
}

  
  render = () => {
    return (
      <div className = {style.Root}>
        <Newtodo value={this.state.textValue} onAdd={this.handleonadd} onValue={this.handleonValue} value={this.state.textValue} />
       {this.state.todos.map((todos,idx)=>(    
          
          <Todo key={idx} ticked={todos.ticket} name={todos.name} />

        ))}
         
         
      </div>
    )
  }
}

export default Todolist