import React from 'react'
import { ButtonUi } from '../../UI/ButtonUi/ButtonUi'
import { InputUi } from '../../UI/InputIU/InputUi'
import { LogoUI } from '../../UI/LogoUI/LogoUI'
import "./Login.css"
import pass from "./../../../images/password.png"
import email from "./../../../images/mainl.png"
import { IconUI } from '../../UI/IconUI/IconUI'
import { Anchor } from '../../UI/Anchor/Anchor'

export const Login = () => {
  
  return (
    <>
   
    <div className='container'>
      <div className='left'>
        <h2>Hola!</h2>
        <h3>Accede a tu cuenta</h3>
        <div className='input_container'>
          <IconUI iconstyle='icon2' icon={email}/>
          <IconUI iconstyle='icon1' icon={pass}/>
          <InputUi classInput='documentI' input_text="documento"/>
          <InputUi classInput='passwordI' input_text="contraseña"/>
        </div>   
        <ButtonUi button_text="ingresar"/>
      </div>
      <div className='logo_contaier'>
        <LogoUI/>
      </div>
      
      <div className='right'>
        <h2>Bienvenido!</h2>
        <h3>Crea una cuenta</h3>
        
        <Anchor className="e" references="/singup" textAnchor="singup"></Anchor>
        <ButtonUi buttonClass='registerButton' button_text="Registrese"  />
      </div>
    </div>
        
    </>
  )
}
