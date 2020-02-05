/*
in the museum file this is the actions folder seperated as actions and types.

*/ 

const CREATECLICK = "CREATECLICK"
const VIEWCLICK = "VIEWCLICK"
const CREATESUBMIT = "CREATESUBMIT"
const ANSWER = "ANSWER"


//how to fetch
const GETTEMPLATES = "GETTEMPLATES"
const getTemplates = (templates) => ({type: GETTEMPLATES, payload: {templates}})
const GETQUESTIONS = "GETQUESTIONS"
const getQuestions = (questions) => ({type: GETQUESTIONS, payload: {questions}})
const GETMADLIBS = "GETMADLIBS"
const getMadlibs = (madlibs) => ({type: GETMADLIBS, payload: {madlibs}})


const createClickCreator = () => ({type: CREATECLICK})
const viewClickCreator = () => ({type: VIEWCLICK})
const createSubmitCreator = (value) => ({type: CREATESUBMIT, payload: {value}})
const answerCreator = (value) => ({type: ANSWER, payload: {value}})
//TO ADD: madlib creator. (at the end of post request adds the response to state.)

export {
    createClickCreator,
    viewClickCreator,
    createSubmitCreator,
    getTemplates,
    getQuestions,
    getMadlibs,
    answerCreator
}