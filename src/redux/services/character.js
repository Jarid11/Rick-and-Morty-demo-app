import axios from 'axios'

// Because we are using our redux-saga we won't handle promise here
export const getCharacter = (id) => axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res?.data)