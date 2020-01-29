import React from 'react';
import logo from './logo.svg';
import './App.css';

// state = {

// }

dispatch = (type, payload) => {
  let newState = this.reducer(type,payload)
  this.setState(newState)
}


// reducer = () => {
//   switch(type, payload){
//     case 'TEST':
//       return console.log ('testing 1.2.3.')
//         //to use () => this.dispatch.('TEST')
//     case `HANDLE_CHANGE`:
//       return console.log ('state : ${payload}')
//         // to use  (event) => this.dispatch(`FORM_TEST`, event.target.value)
//     case `ADD_TEXT`:
//       return console.log ([...this.state.things, this.state.text])
//         //this is adding a text to state
//         //reset your text state here if you want to. (text : "")
//         //to use ()=> this.dispatch('ADD_TEXT')
//     default:
//       return console.log ('somethings gone wrong')
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
