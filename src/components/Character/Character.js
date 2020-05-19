import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { characterActions } from '../../redux/reducers/character'
import Button from '../Button/Button'
import Edit from '../Icons/Edit'
import Delete from '../Icons/Delete'
import './Character.css'

const { deleteCharacter, editCharacterName } = characterActions

const Character = ({ character, editChar, deleteChar }) => {
    const [showEditInput, setShowEditInput] = useState(false)

    return (
        <Fragment>
           <main className="mainContainer">
             {!showEditInput ? (
                <p className="charName">{character.name}</p>
              ) : (
                <input className="charInput" placeholder="Enter New Name Here" onChange={(e) => editChar(e.target.value)} />
             )}
             <img className="charImg" alt="char-img" src={character.img} />
           </main>
           <section className="buttonContainer">
             <Button icon={<Edit />} onClick={() => setShowEditInput(!showEditInput)}  />
             <Button icon={<Delete />} onClick={deleteChar}  />
           </section>
        </Fragment>
     )
}

const mapDispatchToProps = (dispatch) => ({
    deleteChar: () => dispatch(deleteCharacter()),
    editChar: (newName) => dispatch(editCharacterName(newName))
})

export default connect(null, mapDispatchToProps)(Character)