import React from 'react'
import { connect } from 'react-redux';
import {viewMadLibCreator, deleteMadLib} from '../actionCreators'


class MadLibView extends React.Component{
    
    state = {
       sortedMadlib : this.props.allMadlibs,
       toRemove : ''
    }
    
    madLibDeleter = (id) => {
        console.log(id)
        fetch(`http://localhost:3000/madlibs/${id}`,{
          method: 'DELETE',
        })
        .then((response) => response.json())
        .then((resp) =>console.log("deleted", resp))
        .then((removed) => this.setState({toRemove : removed}))
         
        // .then((removeML) =>)
        /*{id: 8, user: {…}, completed_text: "Hello WeWork, I am Gabe and Im ready to Go malding", template: {…}}
            id: 8
            user: {id: 1, name: "Gabe", color: "blue", font: "comic_sans", created_at: "2020-01-31T22:56:53.250Z", …}
            completed_text: "Hello WeWork, I am Gabe and Im ready to Go malding"
            template: {id: 8, title: "test", text: "Hello _, I am _ and Im ready to _", displaytext: "Hello (place), I am (name) and I’m ready to (verb).", created_at: "2020-02-04T19:58:14.937Z", …}
            __proto__: Object
        */    
      }


    render(){
       console.log(this.state)
        
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
