import React from 'react';
import './todo.css'

class Todo extends React.Component {
    render() {
        return (

            <div className='body'>
                <div> <h2>Phone Features </h2><a className='fa'>...</a>
                </div>
                <div className='table'>
                    <div>Subwoofer</div>
                    <div>Non-porous,washable</div>
                    <div>Wings</div>
                    <div>bevveled Bezel</div>
                    <div>bezeled bevel</div>
                    <div>Seedless</div>
                </div>
                <div>
                 <a >Add a card ...</a>
                </div>
            </div>
        )
    }
}

export default Todo