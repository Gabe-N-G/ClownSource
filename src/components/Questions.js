import React from 'react';
import { connect } from 'react-redux';
// import NavBar from './components/NavBar'
// import MainContainer from './Containers/MainContainer'


class Questions extends React.Component{
  state ={
    

  }
  
  handlechange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name] : e.target.value})
  }

  render(){
    let questionArray = this.props.allQuestions? this.props.allQuestions.filter(array => array.template_id === this.props.selectForm.id) : ""
    // console.log(questionArray)
        return (
            <div className='Centerwindow'>
                This is my new container.
                <form>
                    <label>
                      Fill in the blanks!
                    </label>
                    {questionArray.map(question => 
                      <input type="text" 
                        onChange={this.handlechange}
                        name={question.identifier}
                        placeholder={question.text} 
                        value={this.state.value}/>
                      )                                                
                    }
              </form>
            </div>
        );
    }
}

const MSP = (state) => {
  console.log(`MSP`,state)
  return {
    selectForm: state.selectForm,
    allTemplates : state.allTemplates,
    allQuestions : state.allQuestions
  }
}

const MDP = (dispatch) => {
  // console.log(`MDP`, dispatch) 
  return {

  }
}

export default connect(MSP, MDP)(Questions);