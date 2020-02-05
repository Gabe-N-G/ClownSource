import React from 'react'
import { connect } from 'react-redux';

class CompletedForm extends React.Component{
    
    state = {
        complete: '',
        newMadlib: {},
    }

    handleChange(e){
        console.log(e.target.name, e.target.value)
    }

    madLibCreator(props){
        console.log("saved!", this.props.currentUser)
        console.log(this.props.selectForm.id)
        console.log(this.props.answers)
        fetch('http://localhost:3000/madlibs',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user_id: this.props.currentUser, template_id: this.props.selectForm.id, answers: this.props.answers})
        })
        .then((response) => response.json())
        .then((data) => {this.setState({newMadlib : data})})
      }
   

    render(){
        // console.log(this.props)
        // let complete = (`Hello ${this.props.answers.test_1}, I am ${this.props.answers.test_2} and Im ready to ${this.props.answers.test_3}`)
        // console.log(complete)
        // let complete_too = JSON.parse(JSON.stringify(this.props.selectForm.text))
        // console.log(typeof complete_too)
        // console.log(this.props.selectForm.text)
        console.log(this.state)
        console.log(typeof this.props.allMadlibs)
        return(
         
            <div >
                 {/* {this.props.selectForm.displaytext} */}
                 <br/>
                 <br/>
                 <p>
                  {this.state.newMadlib.completed_text}
                 {/* Hello {this.props.answers.test_1}, I am {this.props.answers.test_2} and I'm ready to {this.props.answers.test_3}  */}
                 </p>  
                 <button onClick={(props)=>this.madLibCreator(props)}>Save Madlib?</button>  
            </div>
        )
    }
}

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
        answers: state.answers,
        selectForm : state.selectForm,
        userName:  state.userName,
        currentUser: state.currentUser,
        allMadlibs: state.allMadlibs
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {
    }
  }
  
export default connect(MSP, MDP)(CompletedForm);
