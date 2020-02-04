import React from 'react'
import { connect } from 'react-redux';
import MadLibCreator from '../components/MadLibCreator'
import Questions from '../components/Questions'
import {getTemplates, getQuestions} from  '../actionCreators'
import CompletedForm from '../components/CompletedForm'

class MainContainer extends React.Component{
    
    componentDidMount(){
        fetch('http://localhost:3000/templates')
        .then(response => response.json())
        .then(templates => {this.props.getTemplates(templates)});
        fetch('http://localhost:3000/questions')
        .then(response => response.json())
        .then(questions => {this.props.getQuestions(questions)});
        
  }

    render(){
        // console.log(this.props)
        return(
            <div>
                {this.props.selectForm? <Questions/> : <MadLibCreator/>}
            {/* <CompletedForm/> */}

            </div>
        
        )
    }
}


const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        userName:  state.userName,
        formCreateClick: state.formCreateClick,
        selectForm: state.selectForm,
        //fetch here
        allTemplates: state.allTemplates,
        allQuestions: state.allQuestions
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch) 
    return {
        getTemplates: (templates) => dispatch(getTemplates(templates)),
        getQuestions: (questions) => dispatch(getQuestions(questions))
    }
  }
  
export default connect(MSP, MDP)(MainContainer);