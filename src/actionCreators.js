/*
      case 'CREATECLICK':
                return {...prevState, 
                        MadLibCreateClick: true,
                        MadLibViewClick: false
                        }
            case 'VIEWCLICK':
                return  {...prevState, 
                        MadLibViewClick: true,
                        MadLibCreateClick: false
                        }
            case 'CREATESUBMIT':
                // console.log("in reducer", action)
                return  {...prevState,
                        selectForm: action.payload    
                        }
*/ 

const CREATECLICK = "CREATECLICK"
const VIEWCLICK = "VIEWCLICK"
const CREATESUBMIT = "CREATESUBMIT"

const createClickCreator = () => ({type: CREATECLICK})
const viewClickCreator = () => ({type: VIEWCLICK})
const createSubmitCreator = (value) => ({type: CREATESUBMIT, payload: {value}})

export {
    createClickCreator,
    viewClickCreator,
    createSubmitCreator,
}