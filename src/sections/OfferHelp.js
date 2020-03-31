import React, { useEffect } from 'react'
import { OfferForm } from '../components'

export const OfferHelp = ({ className = '', style = {} }) => {
  useEffect(() => {
    window.scroll({
      top: 0
    })
  }, [])

  return <div className='all min-h-md w-full'>
    <OfferForm />
  </div>
}
