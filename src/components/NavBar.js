import React from 'react'
import { connect } from 'react-redux';


class Navbar extends React.Component{
    render(){
        return(
            <div class='Navbar'>
                Hello {this.props.userName} welcome to Clownsource.io! would you like to: <button onClick={this.props.create}>Create New Circus</button> <button onClick={this.props.view} >Read Saved Circuses</button> <button>logout</button>
            </div>
        
        )
    }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
        userName: state.userName,
    }
  }
  
const MDP = (dispatch) => {
    return {
        create: () => dispatch({type: "CREATECLICK"}),
        view: () => dispatch({type: "VIEWCLICK"})
    }
  }
  
export default connect(MSP, MDP)(Navbar);
