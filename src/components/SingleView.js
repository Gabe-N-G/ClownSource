import React from 'react'
import { connect } from 'react-redux';


class SingleView extends React.Component{
    
    state = {
       
    }

    //  in RUBY: params[:answers].each_value{|value| currenttemplate.text.sub!(/[_]/, value)}
    render(){
        console.log(this.props)
        return(
            <div className="Centerwindow">
                <h1>{this.props.viewMadlib.template.title}</h1>
                <h3>by: {this.props.viewMadlib.user.name}</h3>
            <br/>
                {this.props.viewMadlib.completed_text}
            <br/>
            </div>
        )
    }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
        viewMadlib: state.viewMadlib,
        
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {

    }
  }
  
export default connect(MSP, MDP)(SingleView);
