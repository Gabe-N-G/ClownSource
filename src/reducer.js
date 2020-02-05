

let defaultState = {
    //our centrailized state goes here
    //THE UNITED STATES
    userName : '~test~',
    // userColor : 'blue',
    // userFont : 'Comic Sans MS", cursive, sans-serif',
    currentUser: 1,
    MadLibAction: null,
    selectForm: '',
    allTemplates : [],
    allQuestions : [],
    allMadlibs: [],
    answers: [],
    viewForm: '',
    viewMadlib: null
}

let reducer = (prevState=defaultState, action) => {
    //reducer is run once in createStore
    //this is whole thing is our reducer template.
    // console.log(arg1, arg2) ?? didn't get this part of the deal
    //use prevstate to add chagnge state.
    //make sure your payload keys are in order
        switch(action.type){
            case 'CREATECLICK':
                return {...prevState, 
                        MadLibAction: "Create",
                        }
            case 'VIEWCLICK':
                return  {...prevState, 
                        MadLibAction: "View",
                        }
            case 'COMPLETECLICK':
                return {...prevState,
                        MadLibAction: "Complete"
                        }
            case 'CREATESUBMIT':
                console.log(action)
                return  {...prevState,
                        selectForm: action.payload.value    
                        }
            case 'ANSWER':
                console.log(action)
                return {...prevState,
                        answers: action.payload.value,
                        }
            case 'POSTMADLIB':
                return {...prevState
                            //send to store here
                        }
            case 'VIEWMADLIB':
                return {...prevState,
                        viewMadlib: action.payload.value
                        }
            //fetch command            
            case 'GETTEMPLATES':
                return {...prevState,
                allTemplates: action.payload.templates
                }
            case 'GETQUESTIONS':
                return {...prevState,
                allQuestions: action.payload.questions
                } 
            case 'GETMADLIBS':
                return {...prevState,
                allMadlibs: action.payload.madlibs
                }       
            default:
                return prevState //do what previously happens, just a good catchall.
    }
}

// componentDidMount(){
//     fetch('http://localhost:3000/templates')
//     .then(response => response.json())
//     .then(data => this.setState({ allTemplates: data }));
//     fetch('http://localhost:3000/quresions')
//     .then(response => response.json())
//     .then(data => this.setState({ allQuestions: data }));
//   }


export default reducer