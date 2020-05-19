import { createRequestTypes } from '../../utils/createRequestTypes'

// GET_CHARACTER is an async action so we will leverage createRequestTypes for making Request, Success, and Failure actions
export const GET_CHARACTER = createRequestTypes('GET_CHARACTER')
export const EDIT_CHARACTER_NAME = 'EDIT_CHARACTER_NAME'
export const DELETE_CHARACTER = 'DELETE_CHARACTER'