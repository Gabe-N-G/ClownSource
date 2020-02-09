import React from 'react'
import { connect } from 'react-redux';
import {viewClickCreator, createClickCreator, getUsers, logOutCreator} from '../actionCreators'


        
// style = {{color : current.color} , {fontFamily: current.font}}


class Navbar extends React.Component{

    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {this.props.getUsers(users)});
    }

    render(){
        let current = this.props.allUsers.find(now => now.id === this.props.currentUser)
        
        return(
            <div className='Navbar'>
                Hello  {current?<span style = {{color : current.color}}>{current.name}</span>: "login"} welcome to Clownsource.io! would you like to: <button onClick={this.props.create}>Create New Circus</button> <button onClick={this.props.view} >Read Saved Circuses</button> <button onClick={this.props.logout}>logout</button>
            </div>
        
        )
    }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
        userName: state.userName,
        allUsers: state.allUsers,
        currentUser: state.currentUser

    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {
        create: () => dispatch(createClickCreator()),
        view: () => dispatch(viewClickCreator()),
        logout: () => dispatch(logOutCreator()),
        getUsers: (users) => dispatch(getUsers(users))
    }
  }
  
export default connect(MSP, MDP)(Navbar);
