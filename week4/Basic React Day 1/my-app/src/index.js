import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './App';
import Todo from './todo';




ReactDOM.render(<Popup heading="this is important" > 'hear is some important' </Popup>  , document.getElementById('root'));
ReactDOM.render(<Todo />  , document.getElementById('todo'));
