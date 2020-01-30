import React from 'react'
import { connect } from 'react-redux';
import MadLibCreator from '../components/MadLibCreator'

class MainContainer extends React.Component{
    render(){
        return(
            <div>
                <MadLibCreator/>
            </div>
        
        )
    }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        userName:  state.userName,
        formCreateClick: state.formCreateClick,
    }
  }
  
const MDP = (dispatch) => {
    console.log(`MDP`, dispatch) 
    return {}
  }
  
export default connect(MSP, MDP)(MainContainer);