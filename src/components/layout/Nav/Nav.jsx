import React from 'react'
import { Anchor } from '../../UI/Anchor/Anchor'
import "./Nav.css"

export const Nav = () => {
  return (
      <nav>
        <Anchor className="a" references="/" textAnchor="Home"></Anchor>  
        <Anchor className="b" references="/" textAnchor="Women"></Anchor>
        <Anchor className="c" references="/" textAnchor="Men"></Anchor>
        <Anchor className="d" references="/" textAnchor="other"></Anchor>
        <Anchor className="e" references="/" textAnchor="other"></Anchor>
      </nav>
  )
}
