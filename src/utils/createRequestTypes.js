import { reduce, assoc } from 'ramda'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

// createRequestTypes is a function that creates 3 types of actions for a given async action
// this enables us to handle side effects, as we will have an action for each scenario
export const createRequestTypes = (base) => reduce((accum, type) => assoc(type, `${base}_${type}`)(accum), {})([
    REQUEST,
    SUCCESS,
    FAILURE
])


