import React from 'react'
import { connect } from 'react-redux';

class MadLibCreator extends React.Component{
  render(){
      return(
          <div>
              LETS PLAY A GAME {this.props.userName}
          </div>
      
      )
  }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        userName:  state.userName,

    }
  }
  
const MDP = (dispatch) => {
    console.log(`MDP`, dispatch) 
    return {}
  }
  
export default connect(MSP, MDP)(MadLibCreator);