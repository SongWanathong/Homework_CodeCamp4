import React from 'react'
import styles from './Newtodo.module.css'

function Newtodo(props) {
    const {onAdd, onValue,value}= props
    return (
        <div className={styles.Root}>
            <input placeholder='Enter Todo' className={styles.Input} value={value} onChange={onValue}></input>
            <button className={styles.Button} onClick={onAdd}>ADD</button>
        </div>

    )
}
export default Newtodo