import React from 'react'
import './button.css'
const Button = (probs) => {
    const {btntype,btntext,btnonclick,customclass}=probs;
  return (
    <div className={`${btntype==="PRIMARY" ?`button primary-btn ${customclass}`:` button secondary-btn ${customclass}`}`} onClick={btnonclick}>
     {btntext}
    </div>
  )
}

export default Button
