import React from 'react';

import './App.css';
class Popup extends React.Component{
render() {
  return (
    <div className='container'>
                <div class="card text-center">
                    <div class="card-header">
                        <h5 class="card-title">{this.props.heading}</h5>

                    </div>
                    <div class="card-body">
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                    </div>
                    <div class="card-footer text-muted">
                        <a href="#" class="btn btn-light">Go somewhere</a>
                    </div>
                </div>
            </div>
  );
}
}
export default Popup;
