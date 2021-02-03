import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart, faHandsHelping, faUserFriends, faPeopleCarry, faThumbsUp, faGift } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { client, NEED_TYPES, SUCCESS_STORY_COUNT } from '../graphql'
import { useLogError, useTitle } from '../hooks'
import { useQuery } from 'graphql-hooks'

const title = process.env.NODE_ENV === 'production' ? 'Find A Neighbor' : 'Local | Find A Neighbor'

export const Home = ({ className = '', style = {} }) => {
  useTitle(title)

  const { data, error } = useQuery(SUCCESS_STORY_COUNT)

  useLogError(error)
  console.log(data)

  const hasSuccessStories = !error && data?.success_story_aggregate?.aggregate?.count

  return <>
    <div className='py-16 px-4 flex-center flex-col bg-white'>
      <FontAwesomeIcon icon={faHandsHelping} className='mb-8 text-5xl text-primary-500' />
      <h2 className='text-center max-w-xl'>
        Connecting neighbors in need with neighbors willing to meet needs in Bucks and Montgomery counties
      </h2>
    </div>
    <div className='py-16 px-4 flex-center flex-col bg-primary-500 text-white'>
      <FontAwesomeIcon icon={faUserFriends} className='mb-8 text-5xl' />
      <p className='text-justify max-w-xl mb-8'>
        If you find yourself in a situation that is challenging or confusing, we want you to know that you don't have to walk alone. We're here to help.
      </p>
      <NavLink className='btn text-primary-500' to='/request-help'>Request Help</NavLink>
    </div>
    <div className='py-16 px-4 flex-center flex-col bg-white'>
      <FontAwesomeIcon icon={faHandHoldingHeart} className='mb-8 text-5xl text-primary-500' />
      <p className='text-justify max-w-xl mb-8'>
        One of the great privileges of our humanity is the opportunity we have to feel compassion for our neighbors and extend a helping hand in their time of need.
      </p>
      <NavLink className='btn btn-primary' to='/offer-help'>Offer Help</NavLink>
    </div>
    <div className='py-16 px-4 flex-center flex-col bg-primary-500 text-white'>
      <FontAwesomeIcon icon={faPeopleCarry} className='mb-8 text-5xl' />
      <p className='text-justify max-w-xl mb-8'>
        There are fantastic organizations already busy serving our neighbors in the Upper Bucks region. Check them out and consider how you might support their mission.
      </p>
      <NavLink className='btn text-primary-500' to='/partners'>View Volunteer Opportunities</NavLink>
    </div>
    <div className='py-16 px-4 flex-center flex-col bg-white'>
      <FontAwesomeIcon icon={faGift} className='mb-8 text-5xl text-primary-500' />
      <p className='text-justify max-w-xl mb-8'>
        You may know someone who is in need, and Find A Neighbor may be able to help them.
      </p>
      <NavLink className='btn btn-primary' to='/bless'>Bless A Neighbor</NavLink>
    </div>
    {hasSuccessStories && <div className='py-16 px-4 flex-center flex-col bg-primary-500 text-white'>
      <FontAwesomeIcon icon={faThumbsUp} className='mb-8 text-5xl' />
      <p className='text-justify max-w-xl mb-8'>
        Read about real examples of how your neighbors have already been a blessing to each other.
      </p>
      <NavLink className='btn text-primary-500' to='/success-stories'>Success Stories</NavLink>
    </div>}
  </>
}
