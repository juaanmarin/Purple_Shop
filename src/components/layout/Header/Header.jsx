import React from 'react'
import { LogoUI } from '../../UI/LogoUI/LogoUI'
import { Title } from '../../UI/TitleUI/TitleUI'

export const Header = () => {
  return (
    <>
        <header>
            <LogoUI/>
            <Title title='Purple Shop'></Title>
        </header>
    </>
  )
}
