import React from 'react'

export const IconUI = ({iconstyle="iconUI", icon, description}) => {
  return (
    <img className={iconstyle} src={icon} alt={description}></img>
  )
}
