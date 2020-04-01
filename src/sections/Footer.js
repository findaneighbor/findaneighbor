import React from 'react'
import { NavLink } from 'react-router-dom'

const year = new Date().getFullYear()

export const Footer = ({ className = '', style = {} }) => {
  return <div style={style} className={`footer ${className}`}>
    <p className='email'>
      Questions? Email us:
      <br />
      <a href='mailto:findaneighbor@gmail.com'>findaneighbor@gmail.com</a>
    </p>
    <p className='copy'>&copy; Find A Neighbor {year}</p>
    <div className='faq flex-center flex-col text-primary-400 lg:text-secondary-500'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/request-help'>Request Help</NavLink>
      <NavLink to='/offer-help'>Offer Help</NavLink>
      <NavLink to='/faq'>FAQ and Best Practices</NavLink>
    </div>
  </div>
}
