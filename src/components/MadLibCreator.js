import React from 'react'
import { connect } from 'react-redux';

class MadLibCreator extends React.Component{

 state={
  value : ''
 }

 handleChange = (e) =>{ 
  this.setState({value : e.target.value})
  // console.log(e.target.value)
 }

  render(){
    console.log(this.props)
      return(
          <div className='Centerwindow'>
              <p>  LETS PLAY A GAME {this.props.userName}</p>
              <form onSubmit={e => {
                e.preventDefault();
                this.props.handleSubmit(this.state.value);
                console.log(this.state)
                }}>
                    <label>
                      Pick your template!
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="Test">Test</option>
                      </select>
                    </label>
                    <input type="submit" value="Send in the clowns" />
                  </form>
              
                    
          </div>
      )
  }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        userName:  state.userName,
        selectForm: state.selectForm,
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch) 
    return {
      view: () => dispatch({type: "VIEWCLICK"}),
      handleSubmit:  (value) => dispatch({type: "CREATESUBMIT", payload : value}),
    }
  }
  
export default connect(MSP, MDP)(MadLibCreator);