import React from 'react'
import style from './todolist.module.css'
import Newtodo from './components/Newtodo'
import Todo from './components/Todo'


class Todolist extends React.Component {

  state = {
    todos: [{ ticket: false, name: 'jakdaw', }],
    textValue: ''
  }

  handleDelete =  (idx)=>(e) => {

    this.setState(state =>({todos:state.todos.filter((todo,todoidx) => 
      todoidx !== idx)}))
  }

  handleTick = idx =>(e) => {
     
     this.setState(state =>({ 
      todos :state.todos.map((todo,todoidx)=>(
       (todoidx === idx) ?
       
        {...todo,ticket:!todo.ticket} :todo
      ))


     }))
   }

  handleonValue = (e) => {
    this.setState({
      textValue: e.target.value.trimStart()
    })
  }

  handleonadd = (e) => { 
     if (!this.state.textValue ){
       console.log(!this.state.textValue)
       alert('please input!!')
       return
     }
     console.log(this.state.textValue)
    this.setState( 
     state =>  ({todos :state.todos.concat({name:this.state.textValue.trim(),ticket: false})}),
     ()=>{this.setState({ textValue: ''})}
     )
  }
  
   componentDidMount = () => {
      // alert('did did mout')

   }
   componentDidUpdate = () => {
    // alert('did did update')

  }
  componentWillUnmount = () => {
    // alert('unmout')

  }
  

  render = () => {
    
    return (
      <div className={style.Root}>
        <Newtodo
          value={this.state.textValue}
          onAdd={this.handleonadd}
          onValue={this.handleonValue}
          />
  
        {this.state.todos.map((todos, idx) => (
        <Todo
          key={idx}
          ticked={todos.ticket}
         
          name={todos.name}
          ontick={this.handleTick(idx)}
          ondDelete={this.handleDelete(idx)} 
          />
        ))}
      </div>
    )
  }
  
}

export default Todolist