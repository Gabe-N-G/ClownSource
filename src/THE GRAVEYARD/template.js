import React from 'react'
import { connect } from 'react-redux';


class x extends React.Component{
    
    state = {
       
    }


    render(){
        
        return(
        <div>
            Testing 1 2 3
        </div>
        )
    }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
      
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {

    }
  }
  
export default connect(MSP, MDP)(x);
