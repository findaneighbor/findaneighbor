import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/findaneighbor-w.png'

export const Heading = ({ className = '', style = {} }) => {
  return <header className='heading flex-col'>
    <h1 className='text-2xl md:text-4xl text-center text-white font-semibold'>
      <NavLink to='/'>
        <img src={logo} alt='Find A Neighbor' className='w-48 lg:w-64 my-4 md:my-0' />
      </NavLink>
    </h1>
  </header>
}
