import React from 'react'

export const ButtonUi = ({button_text, buttonClass="buttonUI"}) => {
  return (
    <button className={buttonClass}>{button_text}</button>
  )
}
