import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import characterReducer from './redux/reducers'
import sagas from '../src/redux/sagas/index'

const sagaMiddleware = createSagaMiddleware()

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

const composedEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    devToolsExtension()
)

const store = createStore(characterReducer, composedEnhancers)
sagaMiddleware.run(sagas)

export default store
