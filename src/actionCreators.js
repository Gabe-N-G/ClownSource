/*
in the museum file this is the actions folder seperated as actions and types.

*/ 

const CREATECLICK = "CREATECLICK"
const VIEWCLICK = "VIEWCLICK"
const CREATESUBMIT = "CREATESUBMIT"


//how to fetch
const GETTEMPLATES = "GETTEMPLATES"
const getTemplates = (templates) => ({type: GETTEMPLATES, payload: {templates}})
const GETQUESTIONS = "GETQUESTIONS"
const getQuestions = (questions) => ({type: GETQUESTIONS, payload: {questions}})


const createClickCreator = () => ({type: CREATECLICK})
const viewClickCreator = () => ({type: VIEWCLICK})
const createSubmitCreator = (value) => ({type: CREATESUBMIT, payload: {value}})

export {
    createClickCreator,
    viewClickCreator,
    createSubmitCreator,
    getTemplates,
    getQuestions
}