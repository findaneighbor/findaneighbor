import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart, faHandsHelping, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { client, NEED_TYPES } from '../graphql'
import { useTitle } from '../hooks'

export const Home = ({ className = '', style = {} }) => {
  useTitle('Find A Neighbor')

  return <>
    <div className='py-12 px-4 flex-center flex-col bg-white'>
      <FontAwesomeIcon icon={faHandsHelping} className='mb-8 text-5xl text-primary-500' />
      <h2 className='text-justify max-w-xl'>
        Connecting neighbors in need with neighbors willing to meet needs
      </h2>
    </div>
    <div className='py-12 px-4 flex-center flex-col bg-primary-500 text-white'>
      <FontAwesomeIcon icon={faUserFriends} className='mb-8 text-5xl' />
      <p className='text-justify max-w-xl mb-8'>
        If you find yourself in a situation that is challenging or confusing, we want you to know that you don't have to walk alone. We're here to help.
      </p>
      <NavLink className='btn text-primary-500' to='/request-help'>Request Help</NavLink>
    </div>
    <div className='py-12 px-4 flex-center flex-col bg-white'>
      <FontAwesomeIcon icon={faHandHoldingHeart} className='mb-8 text-5xl text-primary-500' />
      <p className='text-justify max-w-xl mb-8'>
        One of the great privileges of our humanity is the opportunity we have to feel compassion for our neighbors and extend a helping hand in their time of need.
      </p>
      <NavLink className='btn btn-primary' to='/offer-help'>Offer Help</NavLink>
    </div>
  </>
}
