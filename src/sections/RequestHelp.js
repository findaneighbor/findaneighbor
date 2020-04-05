import React, { useEffect, useState } from 'react'
import { RequestForm, Disclaimer } from '../components'
import { setSubmissionStatus, getSubmissionStatus } from '../utilities'
import { useTitle } from '../hooks'

export const RequestHelp = ({ className = '', style = {} }) => {
  useTitle('Find A Neighbor | Request Help')

  const [submittedRequest, setSubmittedRequest] = useState(getSubmissionStatus('requestForHelpSubmitted'))

  const onSubmit = () => {
    setSubmittedRequest(true)

    setSubmissionStatus('requestForHelpSubmitted', true)
  }

  const submitAnother = () => {
    setSubmittedRequest(false)

    setSubmissionStatus('requestForHelpSubmitted', false)
  }

  useEffect(() => {
    window.scroll({
      top: 0
    })
  }, [])

  return <div className='py-12 px-4 w-full'>
    <h2 className='text-primary-500 text-center text-xl md:text-2xl font-semibold mb-8'>Request Help</h2>
    <Disclaimer className='mb-12' />
    {submittedRequest
      ? <div className='max-w-xl mx-auto text-center'>
        <h3 className='text-4xl text-secondary-500 mb-4 font-semibold'>Thank you</h3>
        <p className='text-justify mb-4'>
          We have received your information, and we will be in contact with you soon.
        </p>
        <button className='btn text-secondary-500' onClick={submitAnother}>Back to the Form</button>
      </div>
      : <RequestForm onSubmit={onSubmit} />}
  </div>
}
