import React from 'react';
import { connect } from 'react-redux';
// import Singlequestion from './Singlequestion'
import {answerCreator, completeClickCreator} from '../actionCreators'





class Questions extends React.Component{

  state ={

  }
  
  handlechange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }




  render(){
    // console.log(this.state)
    let questionArray = this.props.allQuestions? this.props.allQuestions.filter(array => array.template_id === this.props.selectForm.id) : ""
    // console.log(questionArray)
        return (
            <div className="Test">
                <h3 className="Top2">Riddle me these questions!~</h3>
            <form onSubmit={e => {e.preventDefault()
                this.props.handleSubmit(this.state)}
                }>
                   
                 <h3 className="Questiontop">
                     Fill in the blanks!
                 </h3>
                <br/>
                <table>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    {questionArray.map(question => 
                          <tr>
                            <td>Give me a {question.text}!</td>
                            <td><input type="text" 
                              onChange={this.handlechange}
                              name={question.identifier}
                              placeholder={question.text} 
                              value={this.state.value}/></td>
                          </tr>
                      )                                                      
                    }
                </table>
                    <br/>
                <input className="Submit" type="submit" value="Submit" />
                
            </form>
            
           </div>
           
        );
    }
}

const MSP = (state) => {
  // console.log(`MSP`,state)
  return {
    selectForm: state.selectForm,
    allTemplates : state.allTemplates,
    allQuestions : state.allQuestions,
    answers : state.answers,
    users: state.userName
  }
}

const MDP = (dispatch) => {
  // console.log(`MDP`, dispatch) 
  return {
    handleSubmit:  (value) => dispatch(answerCreator(value)),
    completeClick: () => dispatch(completeClickCreator())
  }
}

export default connect(MSP, MDP)(Questions);



/* old code for single page

  state ={
  }
  
  handlechange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name] : e.target.value})
  }

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





*/  

/* single line new container {questionArray.map(q => <Singlequestion key ={q.id} identifier={q.identifier} text={q.text}  />)} */
