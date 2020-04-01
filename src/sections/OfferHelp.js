import React, { useEffect } from 'react'
import { OfferForm, Disclaimer } from '../components'

export const OfferHelp = ({ className = '', style = {} }) => {
  useEffect(() => {
    window.scroll({
      top: 0
    })
  }, [])

  return <div className='py-12 px-4 w-full'>
    <Disclaimer className='mb-12' />
    <OfferForm />
  </div>
}
