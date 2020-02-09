import React from 'react'
import { connect } from 'react-redux';
import {viewMadLibCreator, deleteMadLib} from '../actionCreators'


class MadLibView extends React.Component{
    
    state = {
       
    }
    
    madLibDeleter = (id) => {
        console.log(id)
        fetch(`http://localhost:3000/madlibs/${id}`,{
          method: 'DELETE',
        //   headers:{
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({id: id})
        })
        .then((response) => response.json())
        .then((resp) =>console.log("deleted", resp)) 
        .then ((thing) => {return thing})
      }


    render(){
       
        
        return(
            <div className="Centerwindow" >
              

                Here are ya malibs! Click to see!
                {this.props.allMadlibs.map(libs =><div> Title: {libs.template.title}|
                                                        User: {libs.user.name}|
                                                        <button onClick={() => this.props.handleClick(libs)}>view</button> 
                                                        <button onClick={() => this.madLibDeleter(libs.id)}>delete</button>
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
        deleteMadLib: (id) => dispatch(deleteMadLib(id))
        
    }
  }
  
export default connect(MSP, MDP)(MadLibView);
