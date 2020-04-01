import React from 'react'

export const Disclaimer = ({ className = '', style = {} }) => {
  return <div className={`max-w-xl mx-auto ${className}`}>
    <div className='border border-secondary-300 p-2'>
      <p className='mb-4'>
        <span className='underline'>Note:</span> Find A Neighbor connects neighbors, not professionals. We do not seek to provide emergency or mental health crisis services. Rather, we partner with existing agencies who are experts in these areas.
      </p>
      <ul className='pl-4'>
        <li className='mb-2'>
          <em>Are you experiencing a true emergency?</em>
          <strong className='ml-2 font-semibold'>Call 911.</strong>
        </li>
        <li className='mb-2'>
          <em>Are you or someone you know experiencing depression or suicidal thoughts?</em>
          <strong className='ml-2 font-semibold'>Call the National Suicide Prevention Lifeline at 1-800-273-TALK (8255).</strong>
        </li>
        <li className='mb-2'>
          <em>Are you homeless or experiencing a housing crisis?</em>
          <strong className='ml-2 font-semibold'>Call the Bucks County Housing Link at 1-800-810-4434.</strong>
        </li>
      </ul>
    </div>
  </div>
}
