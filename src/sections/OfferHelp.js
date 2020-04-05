import React, { useEffect, useState } from 'react'
import { OfferForm, Disclaimer } from '../components'
import { getSubmissionStatus, setSubmissionStatus } from '../utilities'
import { useTitle } from '../hooks'

export const OfferHelp = ({ className = '', style = {} }) => {
  useTitle('Find A Neighbor | Offer Help')

  const [submittedOffer, setSubmittedOffer] = useState(getSubmissionStatus('offerToHelpSubmitted'))

  const onSubmit = () => {
    setSubmittedOffer(true)

    setSubmissionStatus('offerToHelpSubmitted', true)
  }

  const submitAnother = () => {
    setSubmittedOffer(false)

    setSubmissionStatus('offerToHelpSubmitted', false)
  }

  useEffect(() => {
    window.scroll({
      top: 0
    })
  }, [])

  return <div className='py-12 px-4 w-full'>
    <h2 className='text-primary-500 text-center text-xl md:text-2xl font-semibold mb-8'>Offer Help</h2>
    <Disclaimer className='mb-12' />
    {submittedOffer
      ? <div className='max-w-xl mx-auto text-center'>
        <h3 className='text-4xl text-secondary-500 mb-4 font-semibold'>Thank you</h3>
        <p className='text-justify mb-4'>
          We appreciate your desire to partner with us to serve our neighborhoods. We will be in contact with you soon.
          <br />
          <br />
          Together, we can make a difference!
        </p>
        <button className='btn text-secondary-500' onClick={submitAnother}>Back to the Form</button>
      </div>
      : <OfferForm onSubmit={onSubmit} />}
  </div>
}
