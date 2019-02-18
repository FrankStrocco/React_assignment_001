import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './UserInput/userInput.css';
import './UserOutput/userOutput.css';
import './App.css';

class App extends Component {

    state = {
        userName: [
            {name: "Frank"},
            {name: "the 2nd paragraph of ipsum lorem...."}
        ]
    }


    newNameHandler = (event) => {
        this.setState( {
            userName: [
                {name: event.target.value},
                {name: "the 2nd paragraph of ispsum lorem...."}

            ]
        })
    }



render() {
    return (
        <div className="App">
            <header className="App-header">
            <p>Hi, I'm Frank!</p>
            <button onClick={this.newNameHandler} >Submit</button>
            <UserInput
                name={this.state.userName[0].name}
                changed={this.newNameHandler}
            />
            <UserOutput name={this.state.userName[0].name}/>
            <UserOutput name={this.state.userName[1].name}/>
            </header>
        </div>
    );
}
}

export default App;
