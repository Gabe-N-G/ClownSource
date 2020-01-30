import React from 'react'
import { connect } from 'react-redux';


class Navbar extends React.Component{
    render(){
        return(
            <div class='Navbar'>
                Hello {this.props.userName} welcome to Clownsource.io! would you like to: <button>Create New Circus</button> <button>Read Saved Circuses</button>
            </div>
        
        )
    }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        userName: state.userName,
    }
  }
  
  const MDP = (dispatch) => {
    console.log(`MDP`, dispatch) 
    return {
        
    }
  }
  
export default connect(MSP, MDP)(Navbar);
