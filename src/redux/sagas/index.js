import { all } from 'redux-saga/effects'
import watchCharacterSagas from './character.sagas'

// If we had multiple sagas we can import seperately
// then add sagas to yield all()

export default function* watchAll() {
    yield all([ watchCharacterSagas()])
}