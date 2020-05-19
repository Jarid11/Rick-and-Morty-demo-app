// using redux-actions for cleaner reducer syntax
import { createActions, handleActions } from 'redux-actions'

// constant
import { GET_CHARACTER, EDIT_CHARACTER_NAME, DELETE_CHARACTER } from '../constants/character'

// intialState
const intialState = {
    fetchingCharacter: false,
    errorMessage: '',
    character: {}
}

// redux actions
export const characterActions = createActions({
    [GET_CHARACTER.REQUEST]: (id) => ({ id }),
    [GET_CHARACTER.SUCCESS]: (character) => ({ character }),
    [GET_CHARACTER.FAILURE]: (error) => ({ error }),
    [EDIT_CHARACTER_NAME]: (newName) => ({ newName }),
    [DELETE_CHARACTER]: undefined,
})

// reducer
const reducerMap = {
    [GET_CHARACTER.REQUEST]: (state) => ({
        ...state,
        fetchingCharacter: true,
        errorMessage: ''
    }),
    [GET_CHARACTER.SUCCESS]: (state, { payload }) => ({
        ...state,
        fetchingCharacter: false,
        character: payload?.character
    }),
    [GET_CHARACTER.FAILURE]: (state, { payload }) => ({
        ...state,
        fetchingCharacter: false,
        errorMessage: payload?.error
    }),
    [EDIT_CHARACTER_NAME]: (state, { payload }) => ({
        ...state,
        character: {
            img: state.character.img,
            name: payload.newName
        }
    }),
    [DELETE_CHARACTER]: (state) => ({
        ...state,
        character: {}
    })
}

// connect initial state to reducer
const characterReducer = handleActions(reducerMap, intialState)

export default characterReducer
