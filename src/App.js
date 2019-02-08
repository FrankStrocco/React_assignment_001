import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

class App extends Component {

    state = {
        userName: [
            {name: "Frank"},
            {name: "the 2nd paragraph of ipsum lorem...."}
        ]
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi, I'm Frank!
          </p>
          <UserInput />
          <UserOutput name={this.state.userName[0].name}/>
          <UserOutput name={this.state.userName[1].name}/>
        </header>
      </div>
    );
  }
}

export default App;
