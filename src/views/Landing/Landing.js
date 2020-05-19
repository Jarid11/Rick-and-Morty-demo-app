import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'ramda'
import { characterActions } from '../../redux/reducers/character'
import Button from '../../components/Button/Button'
import MessageBarContainer from '../../components/MessageBarContainer/MessageBarContainer'
import Character from '../../components/Character/Character'
import './Landing.css'

const { getCharacterRequest } = characterActions

const characterIds = [1, 2, 5, 'not a valid id']

// let's make this interesting... (We want to handle errors)   
const getRandomId = () => characterIds[Math.floor(Math.random() * characterIds.length)]

const Landing = ({ getCharacter, fetchingCharacter, character }) => (
    <div className="wrapper">
        {isEmpty(character) ? (
            <Button onClick={() => getCharacter(getRandomId())} label="Click Me" isSubmitting={fetchingCharacter} />
        ) : (
            <Character character={character} />
        )}
        <MessageBarContainer />
    </div>
)
    
const mapStateToProps = ({ character }) => ({
    fetchingCharacter: character.fetchingCharacter,
    character: character.character
})

const mapDispatchToProps = (dispatch) => ({
    getCharacter: (id) => dispatch(getCharacterRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)