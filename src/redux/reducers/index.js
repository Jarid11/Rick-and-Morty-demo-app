import { combineReducers } from 'redux'
import character from './character'

const reducers = {
    character
}

// although we only have one reducer, setup for scalability
const combinedReducers = { ...reducers }

export default combineReducers(combinedReducers)