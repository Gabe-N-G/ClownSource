

let defaultState = {
    //our centrailized state goes here
    //THE UNITED STATES
    // userName : '~test~',
    // userColor : 'blue',
    // userFont : 'Comic Sans MS", cursive, sans-serif',
    currentUser: {id: 35, name: "Test", color: "Yellow", font: "Arial, Helvetica, sans-serif"},
    MadLibAction: 'Login',
    selectForm: '',
    allTemplates : [],
    allQuestions : [],
    allMadlibs: [],
    allUsers: [],
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
                        viewMadlib: null,
                        answers: [],
                        selectForm: ''
                        }
            case 'VIEWCLICK':
                return  {...prevState, 
                        MadLibAction: "View",
                        viewMadlib: null,
                        answers: [],
                        selectForm: ''
                        }
            case 'LOGOUT':
                return {...prevState,
                        MadLibAction: "Login",
                        viewMadlib: null,
                        answers: [],
                        selectForm: '',
                        currentUser: ''
                        }
            case 'CHANGEUSER':
                console.log(action.payload)
                return {...prevState,
                    currentUser: action.payload.value
                }
            case 'MAKEMADLIB':
                console.log(action.payload.value)
                return {...prevState,
                        allMadlibs: [...prevState.allMadlibs, action.payload.value],
                        viewMadlib: action.payload.value
                        }
            case 'MAKETOVIEW':
                return{...prevState,
                        MadLibAction: "View"
                
                }
            case 'CREATESUBMIT':
                console.log(action)
                return  {...prevState,
                        // MadLibAction: "Complete",
                        selectForm: action.payload.value    
                        }
            case 'ANSWER':
                console.log(action)
                return {...prevState,
                        MadLibAction: "Complete",
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
            case 'GETUSERS':
                return {...prevState,
                allUsers: action.payload.users
                }
            case 'DELETEMADLIB':
                return {...prevState,
                id: action.payload.id
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