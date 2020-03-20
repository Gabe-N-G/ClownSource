import React from 'react'
import { connect } from 'react-redux';
import {viewMadLibCreator, deleteMadLib} from '../actionCreators'


class MadLibView extends React.Component{
    
    state = {
       sortedMadlib : this.props.allMadlibs,
       name : "",
       template: ""
    }

    

    
    
    madLibDeleter = (id) => {
        console.log(id)
        fetch(`https://clownsource-backend.herokuapp.com/madlibs/${id}`,{
          method: 'DELETE',
        })
        .then((response) => response.json())

        .then((removed) => this.setState({sortedMadlib : this.state.sortedMadlib.filter(deleted => deleted.id !== removed.id)}))
         
      }
      
    
    handleChange(e,state){
      
      
      this.setState({[e.target.name] : e.target.value})

      if (e.target.name === "name"){
        let newArray = this.props.allMadlibs.filter(thing => thing.user.id == e.target.value)
        this.setState({sortedMadlib : newArray,
                        template : ""})
                      
                       
        document.getElementById("template").selectedIndex = 0

      } else if (e.target.name === "template"){
        console.log("templatechange")
        let newArray = this.props.allMadlibs.filter(thing => thing.template.id == e.target.value)
        this.setState({sortedMadlib : newArray,
                      name: ""})
              
        document.getElementById("name").selectedIndex = 0
      } 

      if(e.target.value === ""){
        this.setState({sortedMadlib: this.props.allMadlibs})
      }
    }

    clearSearch(e){
      console.log("hi!")
      this.setState({sortedMadlib: this.props.allMadlibs})
      document.getElementById("template").selectedIndex = 0
      document.getElementById("name").selectedIndex = 0
    }


    render(){
       console.log(this.state)
        
        return(
            <div className="Centerwindow" >
                <h4 className="Top">Here are ya malibs! Click to see!</h4>
                Sort by name: <select id="name" name="name" value={this.state.value} onChange={(e)=>this.handleChange(e,this.state)}>
                                          <option value=""></option>
                                          {this.props.allUsers.map(user => <option  value={user.id}>{user.name}</option>)}
                              </select>
                Sort by type: <select id="template" name="template" value={this.state.value} onChange={(e)=>this.handleChange(e,this.state)}>
                                          <option value=""></option>              
                                          {this.props.allTemplates.map(template => <option value={template.id}>{template.title}</option>)}
                              </select>
                <button onClick={(e)=>this.clearSearch(e,this.state)}> reset</button>
                <br/>
                <br/>
                {/* <table> */}
                <table style={{width : 500}}>
                    <tr>
                      <th>Title</th>
                      <th>User</th>
                      <th>Controls</th>
                    </tr>
                    <br/>
                    {this.state.sortedMadlib.map(libs =>
                      <tr style={{fontFamily : libs.user.font}}> 
                          <td>{libs.template.title.toUpperCase()}</td>
                          <td style={{color : libs.user.color}}>{libs.user.name}</td>
                          <td><button onClick={() => this.props.handleClick(libs)}>view</button> 
                              <button onClick={() => this.madLibDeleter(libs.id)}>delete</button>
                          </td>
                      </tr> ) }
                </table>                                    
            </div>
        )
    }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        allMadlibs: state.allMadlibs,
        allTemplates : state.allTemplates,
        allUsers: state.allUsers,
        viewMadlib : state.viewMadLib
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {
        handleClick:  (value) => dispatch(viewMadLibCreator(value)),
        deleteMadLib: (id) => dispatch(deleteMadLib(id))
        
    }
  }
  
export default connect(MSP, MDP)(MadLibView);


