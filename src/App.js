import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import MainContainer from './Containers/MainContainer'
// state = {

// }

// dispatch = (type, payload) => {
//   let newState = this.reducer(type,payload)
//   this.setState(newState)
// }


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
    <div class='Container'>
     <NavBar/>
      <div>
        {/* <MainContainer/> */}
      </div>
    </div>
  );
}

const MSP = (state) => {
  console.log(`MSP`,state)
  return {}
}

const MDP = (dispatch) => {
  console.log(`MDP`, dispatch) 
  return {}
}

export default connect(MSP, MDP)(App);
