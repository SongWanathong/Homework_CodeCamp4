import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const app = (
    <div style={{ margin: "20px" }}>

        <h1  >
            <spanf classname="fff">L</spanf>.
           <span>O</span>.
           <spanf>V</spanf>.
           <span>E</span>


        </h1>

    </div>
)
let br = prompt('red หรือ  blue')
const rb = (

    <div>
        {br == 'red' ? "Realiy" :
            br == 'blue' ? 'matrix' :
                ' notmatch'}

    </div>

)


ReactDOM.render(app, document.getElementById('root'));
ReactDOM.render(rb, document.getElementById('rb'));


ReactDOM.render(<App />, document.getElementById('gogo'));
