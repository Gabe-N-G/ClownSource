import React from 'react'
import { connect } from 'react-redux';

class x extends React.Component{    
    state = {
       
    }
    render(){   
        return(
        <div>
            "Hello world!"
        </div>
        )
    }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
      key: state.key
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {
      stateChange: () => dispatch(stateChangeCreator()),
      changeWValue: (value) => dispatch(changeWV(value))
    }
  }
  
export default connect(MSP, MDP)(x);
