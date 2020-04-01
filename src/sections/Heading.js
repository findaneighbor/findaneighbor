import React from 'react'
import { NavLink } from 'react-router-dom'

export const Heading = ({ className = '', style = {} }) => {
  return <header className='heading flex-col py-12 px-4'>
    <h1 className='text-2xl md:text-4xl text-center text-white font-semibold'>
      <NavLink to='/'>Find A Neighbor</NavLink>
    </h1>
  </header>
}
