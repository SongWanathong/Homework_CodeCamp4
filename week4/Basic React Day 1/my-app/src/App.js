import React from 'react';

import './App.css';
class Popup extends React.Component{
render() {
  return (
    <div className='container'>
                <div className="card ">
                    <div className="card-header">
                        <h5 className="card-title">{this.props.heading}</h5>

                    </div>
                    <div className="card-body">
                    {this.props.children}
                    </div>
                    <div className="card-footer text-muted">
                        <a href="#" className="btn btn-light">Go somewhere</a>
                    </div>
                </div>
            </div>
  );
}
}
export default Popup;
