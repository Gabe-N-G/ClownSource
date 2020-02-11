import React from 'react'
import { connect } from 'react-redux';
import {answerCreator} from '../actionCreators'


class Singlequestion extends React.Component{
    
    state = {
       
    }

    handleChange(e){
        console.log(e.target.name, e.target.value)
    }

    render(){
        console.log(this.props)
        return(
        <form onSubmit={e => {e.preventDefault()
        this.props.handleSubmit(this.state.value, this.props.selectForm)
        }}>
            <br/>
            <label>
              Give me a {this.props.text} !
              <input name={this.props.identifier}  type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
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
        handleSubmit:  (value, form) => dispatch(answerCreator(value, form)),

    }
  }
  
export default connect(MSP, MDP)(Singlequestion);
