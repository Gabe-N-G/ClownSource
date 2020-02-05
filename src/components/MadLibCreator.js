import React from 'react'
import { connect } from 'react-redux';
import {createSubmitCreator} from '../actionCreators'
import CompletedForm from './CompletedForm'

  

class MadLibCreator extends React.Component{

 state={
  value : '',
 }

 handleChange = (e) =>{ 
  this.setState({value : e.target.value})
 }
  

  render(){
    // console.log(this.state.value)
    // console.log(this.props.allTemplates)
    //makes sure things load
    let myTemplate = this.props.allTemplates? this.props.allTemplates.filter(mine => mine.title === this.state.value) : "DEAR CHRIST SOMETHINGS GONE WRONG"
    //creates myTemplate
    console.log (myTemplate)
      return(
          <div className='Centerwindow'>
              <p>  LETS PLAY A GAME {this.props.userName}</p>
              <form onSubmit={e => {
                e.preventDefault();
                //passing up the object of the template instead of the value here.
                this.props.handleSubmit(myTemplate[0]);
                }}>
                    <label>
                      Pick your template!
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value=""></option>
                        {/* eventually I'll have to map out more forms here. */}
                        <option value="test">Test</option>
                        <option value="resignation">Resignation</option>
                      </select>
                    </label>
                    <input type="submit" value="Send in the clowns" />
                  </form>
                  <p>                  
                  {this.state.value? `${myTemplate[0].displaytext}` : "you didn't pick a template" }
                  </p>
              
          </div>
      )
  }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
        userName:  state.userName,
        selectForm: state.selectForm,
        allTemplates: state.allTemplates,
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch) 
    return {
      handleSubmit:  (value) => dispatch(createSubmitCreator(value)),
    }
  }
  
export default connect(MSP, MDP)(MadLibCreator);