import React from 'react'
import { ButtonUi } from '../../UI/ButtonUi/ButtonUi'
import { InputUi } from '../../UI/InputIU/InputUi'
import { LogoUI } from '../../UI/LogoUI/LogoUI'
import "./Login.css"

export const Login = () => {
  return (
    <>
    <div className='container'>
    
      <div className='right'>
        <InputUi input_text="documento"/>
        <InputUi input_text="contraseña"/>
        <ButtonUi button_text="ingresar"/>
      </div>
      <div className='left'>
        <h2>Bienvenido</h2>
        <h3>crea una cuenta</h3>
        <ButtonUi button_text="registrarse"/>
      </div>
    </div>
        
    </>
  )
}
