import { combineReducers } from 'redux'
// Import reducers here
import popup from './popup'
import list from './list'
import graph from './graph'
import rootComp from './root'
import studentData from './student'

// Combine all reducers
// If you don't give a key, the name of the reducer is it's
// state's key

const studentApp = combineReducers({
	popup: popup,
	graph: graph, 
	list: list,
	root: rootComp,
	student: studentData,
})

export default studentApp