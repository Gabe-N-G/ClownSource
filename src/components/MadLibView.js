import React from 'react'
import { connect } from 'react-redux';


class MadLibView extends React.Component{
    
    state = {
       
    }


    render(){
       
        // console.log (titlearray)
        return(
        <div className="Centerwindow">
            { Here are ya malibs! Click to see!}
            {this.props.allMadlibs.map(libs =><p> {libs.completed_text} </p> ) }
            
        </div>
        )
    }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        allMadlibs: state.allMadlibs,
        allTemplates : state.allTemplates

    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {

    }
  }
  
export default connect(MSP, MDP)(MadLibView);
