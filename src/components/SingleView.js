import React from 'react'
import { connect } from 'react-redux';


class SingleView extends React.Component{
    
    state = {
       message: this.props.viewMadlib.completed_text,
        title: this.props.viewMadlib.template.title.toUpperCase(),
        sent : false
    }

    handleChange = (e) =>(
        this.setState({[e.target.name] : e.target.value})

    )
    
    

    emailMaker(mailer){        
        console.log("email", mailer)
        let template_params = {
            "toEmail": mailer.toEmail,
            "message": mailer.message,
            "title" : mailer.title
         }
         let service_id = "default_service";
         let template_id = "clownsource_test";
         console.log(service_id, template_id, template_params)
         window.emailjs.send(service_id, template_id, template_params)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text)
                    alert("Email sent!")
                }, function(error) {
                    alert('Email failed :( , try again?', error);
                });
    }

    //  in RUBY: params[:answers].each_value{|value| currenttemplate.text.sub!(/[_]/, value)}
    render(){
        
        return(
            <div className="Centerwindow">
                <h1 style = {{fontFamily : this.props.viewMadlib.user.font}}>{this.props.viewMadlib.template.title.toUpperCase()}</h1>
                <h3 style = {{fontFamily : this.props.viewMadlib.user.font}}>
                    by: <span style = {{color : this.props.viewMadlib.user.color}}>{this.props.viewMadlib.user.name}</span></h3>
            <br/>
                {this.props.viewMadlib.completed_text}
            <br/>    
                <form onSubmit={e => {e.preventDefault()
                this.emailMaker(this.state)}}>
                    <br/>
                    Send as an email?
                    <input type="text" 
                        onChange={this.handleChange} 
                        name="toEmail" 
                        placeholder="email"
                        value={this.state.value}>
                    </input>
                    <input type="submit" value="Send"></input>
                </form>
            <br/>
            {this.state.sent? "Sent!" :""}
            </div>
        )
    }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        viewMadlib: state.viewMadlib,
        
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {

    }
  }
  
export default connect(MSP, MDP)(SingleView);
