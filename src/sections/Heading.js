import React from 'react'

export const Heading = ({ className = '', style = {} }) => {
  return <header className='heading flex-col py-12 px-4'>
    <h1 className='text-2xl md:text-4xl text-center text-white font-semibold'>Find A Neighbor</h1>
  </header>
}
