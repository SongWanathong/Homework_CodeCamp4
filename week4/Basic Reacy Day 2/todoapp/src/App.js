import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    name: 'john',
    age: 30
  }

  handleclick = (e) => {
    console.log(this.state);
    this.setState(
      { name: 'winner' }
    )
    console.log(this.state);

  }
   item = ['Subwoofer', 'Non-porous', 'washable', 'Wingss', 'bevveled', 'bezeled bevel', 'Seedless']
     psuhitem = this.item.map((item) => (<div>{item}</div>));
  render() {

    
    return (

      <div className='body'>
        <div> <h2>{this.state.name}</h2><a className='fa'>...</a>
        </div>
        <div className='table'>
          {this.psuhitem}
          <button name='myname myname' onClick={this.handleclick}>click me</button>
        </div>
        <div>
          <a >Add a card ...</a>


        </div>
      </div>

    );
  }
}

export default App;
