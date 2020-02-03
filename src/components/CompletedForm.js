import React from 'react'
import { connect } from 'react-redux';
import {answerCreator} from '../actionCreators'

class CompletedForm extends React.Component{
    
    state = {
    }

    handleChange(e){
        console.log(e.target.name, e.target.value)
    }


    render(){
        console.log(this.props)
        return(
            <div>
                 {this.props.selectForm.displaytext}
                 <p>
                    Hello {this.props.answers.test_1}, I am {this.props.answers.test_2} and I'm ready to {this.props.answers.test_3}
                 </p>    
            </div>
        )
    }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
        answers: state.answers,
        selectForm : state.selectForm
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {
    }
  }
  
export default connect(MSP, MDP)(CompletedForm);
