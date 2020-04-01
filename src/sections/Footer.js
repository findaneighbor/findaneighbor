import React from 'react'
import { NavLink } from 'react-router-dom'

const year = new Date().getFullYear()

export const Footer = ({ className = '', style = {} }) => {
  return <div style={style} className={`footer ${className}`}>
    <p className='email'>
      Questions? <a className='text-primary-500 underline' href='mailto:findaneighbor@gmail.com'>Email us.</a>
    </p>
    <p className='give text-center'>
      <a className='text-primary-500 underline' href='https://escregistrations.churchcenter.com/giving'>Give.</a>
      <br />
      <em>Choose "Easter" in the Fund Dropdown.</em>
    </p>
    <p className='copy'>&copy; Find A Neighbor {year}</p>
  </div>
}
