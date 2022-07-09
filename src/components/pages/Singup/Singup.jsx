import React from 'react'
import { ButtonUi } from '../../UI/ButtonUi/ButtonUi'
import { InputUi } from '../../UI/InputIU/InputUi'
import { LogoUI } from '../../UI/LogoUI/LogoUI'
import idIcon from "./../../../images/identificacion.png"
import password from "./../../../images/password.png"
import name from "./../../../images/nombre.png"
import numberPhone from "./../../../images/telefono-movil.png"
import email from "./../../../images/mainl.png"
import { IconUI } from '../../UI/IconUI/IconUI'
import "./singUp.css"
import { Anchor } from '../../UI/Anchor/Anchor'

export const Singup = () => {
  return (
    <>
   
    <div className='container'>
      <div className='left2'>
        <h2>Holaa!</h2>
        <h3>¿ya tienes una cuenta?</h3>
        <h4>Inicia Secion</h4>
        <Anchor references="/login" textAnchor={<ButtonUi buttonClass='singUpButton' button_text="Iniciar Secion"  />}></Anchor>
        
      </div>

      <div className='logo_contaier'>
        <LogoUI/>
      </div>
      
      <div className='right2'>
        <h2>Registrate!</h2>
        <h3>Crea una cuenta</h3>
        
        <div className='input_container2'>
          <IconUI iconstyle='icon1' icon={idIcon}/>
          <IconUI iconstyle='icon2' icon={name}/>
          <IconUI iconstyle='icon2' icon={numberPhone}/>
          <IconUI iconstyle='icon1' icon={email}/>
          <IconUI iconstyle='icon2' icon={password}/>
          <InputUi classInput='documentI2' input_text="Documento"/>
          <InputUi classInput='nombreI2' input_text="Nombre"/>
          <InputUi classInput='telefonoI2' input_text="Telefono"/>
          <InputUi classInput='emailI2' input_text="Email"/>
          <InputUi classInput='passwordI2' input_text="Contraseña"/>
        </div>   
        <Anchor references="/login" textAnchor={<ButtonUi button_text="Registrar"/>}></Anchor>
        

      </div>
    </div>
        
    </>
  )
}
