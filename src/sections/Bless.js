import React, { useEffect, useState } from 'react'
import { Disclaimer, BlessForm } from '../components'
import { useTitle } from '../hooks'
import { getSubmissionStatus, setSubmissionStatus } from '../utilities'

const title = process.env.NODE_ENV === 'production' ? 'Find A Neighbor | Bless A Neighbor' : 'Local | Find A Neighbor | Bless A Neighbor'

export const Bless = ({ className = '', style = {} }) => {
  useTitle(title)

  const [submittedBN, setSubmittedBN] = useState(getSubmissionStatus('bnSubmitted'))

  const onSubmit = () => {
    setSubmittedBN(true)

    setSubmissionStatus('bnSubmitted', true)
  }

  const submitAnother = () => {
    setSubmittedBN(false)

    setSubmissionStatus('bnSubmitted', false)
  }

  useEffect(() => {
    window.scroll({
      top: 0
    })
  }, [])

  return <div className='py-12 px-4 w-full'>
    <h2 className='text-primary-500 text-center text-xl md:text-2xl font-semibold mb-8'>Bless A Neighbor</h2>
    <Disclaimer className='mb-12' />
    {submittedBN
      ? <div className='max-w-xl mx-auto text-center'>
        <h3 className='text-4xl text-secondary-500 mb-4 font-semibold'>Thank you</h3>
        <p className='text-justify mb-4'>
          We have received your nomination, and we will be in contact with you soon.
        </p>
        <button className='btn text-secondary-500' onClick={submitAnother}>Back to the Form</button>
      </div>
      : <BlessForm onSubmit={onSubmit} />}
  </div>
}
