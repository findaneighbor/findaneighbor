import React from 'react'

export const SuccessStory = ({ className = '', style = {}, story }) => {
  return <blockquote style={style} className={`before-quote text-lg font-serif ${className}`}>
    <p className='inline italic font-serif'>{story.testimonial}</p>
    <p className='text-right text-2xl text-secondary-500'>
      &#8212;{' '}{story.anonymized_name}{story.location && `, ${story.location}`}
    </p>
  </blockquote>
}
