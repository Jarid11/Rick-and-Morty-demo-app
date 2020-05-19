import React from 'react'
import Spinner from '../Spinner/Spinner'
import './Button.css'

const Button = ({onClick, label, isSubmitting, icon}) => (
  <button 
    className={isSubmitting ? 'button disabledButton' : 'button'}
    // prevent double click network calls
    disabled={isSubmitting} 
    onClick={onClick}> 
      {isSubmitting ? <Spinner/> : !icon ? label : icon}
  </button>
)

export default Button