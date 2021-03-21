import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from 'url:../assets/findaneighbor-w.png'
import { useMedia } from '../hooks'

export const Heading = ({ className = '', style = {} }) => {
  const isSmallScreen = useMedia(['(min-width: 768px)'], [false], true)
  const [showTranslate, setShowTranslate] = useState(!isSmallScreen)

  useEffect(() => {
    if (showTranslate === isSmallScreen) {
      setShowTranslate(!isSmallScreen)
    }
  }, [isSmallScreen])

  return <header className='heading flex-col'>
    <button aria-label='translate this page to a different language' className={`text-white text-4xl absolute top-0 left-0 mt-2 ml-2 ${showTranslate ? 'hidden' : ''}`} onClick={e => setShowTranslate(s => !s)}>
      <FontAwesomeIcon icon={faLanguage} />
    </button>
    <div className={`${!showTranslate ? 'hidden' : ''}`} id='google_translate_element'></div>
    <h1 className='text-2xl md:text-4xl text-center text-white font-semibold'>
      <NavLink to='/'>
        <img src={logo} alt='Find A Neighbor' className='w-48 lg:w-64 my-4 md:my-0' />
      </NavLink>
    </h1>
  </header>
}
