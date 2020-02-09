import React from 'react'
import { connect } from 'react-redux';


class Login extends React.Component{
    
    state = {
    }

    handleChange = (e) => {
      this.setState({[e.target.name] : e.target.value})
    }

    loginCreator(login){
      console.log("saved!", login)
      fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: login.name, font: login.font, color: login.color})
      })
      .then((response) => response.json())
      .then((thing) => console.log("saved", thing)) 
      // .then((data) => {this.setState({newMadlib : data,
      //                                 complete :true})})
    }

    render(){
        console.log(this.state)
        return(
        <div className="Centerwindow">

            <h1>Welcome to Clownsource.io!</h1>
            <br/>
            Please enter your name and favorite color below so that we can connect you to our tiny car filled with talented, open-source, free-range clowns!
            <br/> 
            <br/>
            <form onSubmit={e => {e.preventDefault()
                this.loginCreator(this.state)}}> 
              <span>Name here:<input type="text" 
                              onChange={this.handleChange}
                              name="name"
                              placeholder="name" 
                              value={this.state.value}/></span>
            <br/>
              <label>Favorite color:  
                    <select name="color" value={this.state.value} onChange={this.handleChange}>
                              <option value=""></option>
                              <option value="Blue">Blue</option>
                              <option value="Red">Red</option>
                              <option value="Green">Green</option>
                              <option value="Black">Black</option>
                              <option value="Yellow">Yellow</option>
                              <option value="Orange">Orange</option>
                              <option value="Pink">Pink</option>
                    </select>
              </label>
            <br/>
              <label>
                <span >Favorite Font</span>
                <select name="font" value={this.state.value} onChange={this.handleChange}>
                  <option value=""></option>
                  <option value="Arial, Helvetica, sans-serif">Helvetica</option>
                  <option value={`"Comic Sans MS", cursive, sans-serif`}>Comic Sans</option>
                  <option value={`"Times New Roman", Times, serif`}>Times New Roman</option>
                  <option value={`"Courier New", Courier, monospace	`}>Courier New</option>
                  <option value={`Impact, Charcoal, sans-serif`}>Impact</option>
                  <option value={`Papyrus, fantasy`}>Papyrus</option>
                </select>
              </label>
              <p style = {{fontFamily : this.state.font}}>I, <span style = {{color : this.state.color}}>{this.state.name}</span> hereby grant permission to Clownsource.io to release (poorly) written documents in my name. </p>
              <input type="submit" value="Ok?" />
              </form>
        </div>
        )
    }
}

// can I make colored text inside select? <option style={{color:"blue"}} value="Blue">Blue</option>

const MSP = (state) => {
    // console.log(`MSP`,state)
    return {
      
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {

    }
  }
  
export default connect(MSP, MDP)(Login);
