import React from 'react'
import { OfferForm } from '../components'

export const OfferHelp = ({ className = '', style = {} }) => {
  return <>
    <div className='bottom right min-h-md w-full'>
      <OfferForm />
    </div>
    <img
      className='top left object-cover min-h-xs max-h-xs h-full lg:max-h-full w-full'
      src='https://spiritualityhealth.com/assets/images/Blogs/_articleSummaryImage/helping-each-other.jpg'
      alt='helping each other up a mountain' />
  </>
}
