import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { client, NEED_TYPES } from '../graphql'

export const Home = ({ className = '', style = {} }) => {
  return <>
    <div className='p-4 flex-center flex-col'>
      <p className='text-justify max-w-sm mb-4'>
        On this journey of life, sometimes we go through hard times. If you find yourself in a situation that is challenging or confusing, we want you to know that you don't have to walk alone. We're here to help.
      </p>
      <NavLink className='btn btn-primary' to='/request-help'>I Have A Need</NavLink>
    </div>
    <div className='p-4 w-full h-full bg-secondary-400 flex-center flex-col'>
      <p className='text-justify max-w-sm mb-4 text-white'>
        One of the great privileges of our humanity is the opportunity we have to feel compassion for our neighbors and extend a helping hand in their time of need. If you are able to bless someone in a specific way, we would love to hear from you and connect you with someone in need.
      </p>
      <NavLink className='btn text-primary-500' to='/offer-help'>I Can Help</NavLink>
    </div>
  </>
}
