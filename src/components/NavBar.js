import React from 'react'
import { connect } from 'react-redux';
import {viewClickCreator, createClickCreator} from '../actionCreators'


class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
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
    // console.log(`MDP`, dispatch)
    return {
        create: () => dispatch(createClickCreator()),
        view: () => dispatch(viewClickCreator())
    }
  }
  
export default connect(MSP, MDP)(Navbar);
