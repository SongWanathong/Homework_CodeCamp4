import React from 'react'
import styles from './Todo.module.css'


function Todo(props) {
    let {ticked =false,name = 'ไม่มีชื่อจ้า',ontick ,ondDelete} = props
   
    return (
        <div className = {styles.Root}>
            <span  className = {styles.Tick}  style = {{backgroundColor : ticked ? '#B6D7A8':undefined}} onClick={ontick}></span>
            <div className = {styles.Text}  style={{textDecoration:ticked ? 'line-through' : undefined }}  >{name}</div>
            <span className = {styles.Delete} onClick={ondDelete}>X</span>
            
            
        </div>
  
    )
}

export default Todo