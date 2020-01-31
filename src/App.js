import React from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import MainContainer from './Containers/MainContainer'


function App() {
  return (
    <div class='Container'>
     <NavBar/>
      <div>
        <MainContainer/>
      </div>
    </div>
  );
}

const MSP = (state) => {
  // console.log(`MSP`,state)
  return {}
}

const MDP = (dispatch) => {
  // console.log(`MDP`, dispatch) 
  return {}
}

export default connect(MSP, MDP)(App);
