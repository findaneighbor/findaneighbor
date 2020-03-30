import React from 'react'
import { RequestForm } from '../components'

export const RequestHelp = ({ className = '', style = {} }) => {
  return <>
    <div className='bottom left min-h-md w-full'>
      <RequestForm />
    </div>
    <img
      className='top right object-cover min-h-xs max-h-xs h-full lg:max-h-full w-full'
      src='https://spiritualityhealth.com/assets/images/Blogs/_articleSummaryImage/helping-each-other.jpg'
      alt='helping each other up a mountain' />
  </>
}
