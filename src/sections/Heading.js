import React from 'react'

export const Heading = ({ className = '', style = {} }) => {
  return <header className='heading'>
    <h1 className='text-xl sm:text-2xl md:text-3xl text-center text-primary-500 italic'>Find a neighbor. Be a neighbor!</h1>
  </header>
}
