import { put, call, takeLatest, all, delay } from 'redux-saga/effects'
import { getCharacter } from '../services/character'
import { characterActions } from '../reducers/character'
import objectMapper from 'object-mapper'
import characterMapping from '../../mappers/character'

const { getCharacterRequest, getCharacterSuccess, getCharacterFailure } = characterActions

// sagas leverage ES6 JS generator functions
// giving us the ability to exit and re-enter while saving the context across re-entrances

// utilize try / catch block for handling success and failure of async action
function* getCharacterSaga({ payload }) {
    try {
        const { id } = payload
        const response = yield call(getCharacter, id)
        const mappedResponse = objectMapper(response, characterMapping)
        yield delay(3000)
        yield put(getCharacterSuccess(mappedResponse))
    } catch (e) {
        yield put(getCharacterFailure('Unexpected error occurred, please try again'))
    }
}

// connect getCharacterRequest redux action to getCharacterSaga
export default function* watchCharacterSagas() {
    yield all([ takeLatest(getCharacterRequest().type, getCharacterSaga)])
}
