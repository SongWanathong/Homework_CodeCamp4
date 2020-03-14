import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './App';
import Todo from './todo';
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(<Popup heading="this is important" > With supporting text below as a natural lead-in to additional content. </Popup>  , document.getElementById('root'));
ReactDOM.render(<Todo />  , document.getElementById('todo'));
