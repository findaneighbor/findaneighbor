import React from 'react'
import { NavLink } from 'react-router-dom'

const year = new Date().getFullYear()

export const Footer = ({ className = '', style = {} }) => {
  return <div style={style} className={`footer ${className}`}>
    <p className='email'>
      Questions? <a className='text-primary-500 underline' href='mailto:findaneighbor@gmail.com'>Email us.</a>
      <span id='google_translate_element'></span>
    </p>
    <p className='give text-center'>
      <a className='text-primary-500 underline' href='https://escregistrations.churchcenter.com/giving/to/find-a-neighbor'>Give</a> to the Cause.
      <br />
    </p>
    <p className='copy'>&copy; <NavLink to='/'>Find A Neighbor</NavLink> {year}</p>
  </div>
}
