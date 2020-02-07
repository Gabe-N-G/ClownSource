import React from 'react'
import { connect } from 'react-redux';
import {viewMadLibCreator} from '../actionCreators'


class MadLibView extends React.Component{
    
    state = {
       
    }
    
    madLibCreator(id){
        fetch('http://localhost:3000/madlibs',{
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: this.libs.id})
        })
        .then((response) => response.json())
      }


    render(){
       
        
        return(
            <div className="Centerwindow" >
              

                Here are ya malibs! Click to see!
                {this.props.allMadlibs.map(libs =><div> Title: {libs.template.title}|
                                                        User: {libs.user.name}|
                                                        <button onClick={() => this.props.handleClick(libs)}>view</button> 
                                                        <button>delete</button>
                                                    </div> ) }
                                                    
            </div>
        )
    }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        allMadlibs: state.allMadlibs,
        allTemplates : state.allTemplates,
        viewMadlib : state.viewMadLib
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {
        handleClick:  (value) => dispatch(viewMadLibCreator(value)),
    }
  }
  
export default connect(MSP, MDP)(MadLibView);
