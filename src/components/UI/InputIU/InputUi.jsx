import React from 'react'

export const InputUi = ({input_text, classInput="inputIU"}) => {
  return (
    <input className={classInput} type="text" placeholder={input_text}></input>
  )
}
