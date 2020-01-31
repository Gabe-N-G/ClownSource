import React from 'react'
import { connect } from 'react-redux';

class MadLibCreator extends React.Component{
  render(){
      return(
          <div class='Centerwindow'>
              
              <p>  LETS PLAY A GAME {this.props.userName}</p>

              <p>
              <form onSubmit={this.handleSubmit}>
                    <label>
                      Pick your form!
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
              </p>
                    
          </div>
      )
  }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
        userName:  state.userName,
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch) 
    return {

    }
  }
  
export default connect(MSP, MDP)(MadLibCreator);