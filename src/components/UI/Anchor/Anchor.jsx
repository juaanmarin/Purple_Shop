import React from 'react'
import { Link } from 'react-router-dom'

export const Anchor = ({className,references,textAnchor}) => {
  return (
    <Link className={className} to={references}> {textAnchor} </Link>
  )
}
