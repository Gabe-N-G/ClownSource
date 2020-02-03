import React from 'react';
import { connect } from 'react-redux';
// import NavBar from './components/NavBar'
// import MainContainer from './Containers/MainContainer'


class Questions extends React.Component{
    render(){
        return (
            <div className='Centerwindow'>
                This is my new container.
            </div>
        );
    }
}

const MSP = (state) => {
  // console.log(`MSP`,state)
  return {
    selectForm: state.selectForm,
  }
}

const MDP = (dispatch) => {
  // console.log(`MDP`, dispatch) 
  return {}
}

export default connect(MSP, MDP)(Questions);