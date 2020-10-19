import React, { Fragment } from 'react'

export const SuccessStory = ({ className = '', style = {}, story }) => {
  return <blockquote style={style} className={`before-quote text-lg font-serif ${className}`}>
    {story.testimonial.split('\n').map((t, i) => <Fragment key={i}>
      {i !== 0 && <br />}
      <p className='inline italic font-serif'>{t}</p>
    </Fragment>)}
    <p className='text-right text-2xl text-secondary-500'>
      &#8212;{' '}{story.anonymized_name}{story.location && `, ${story.location}`}
    </p>
  </blockquote>
}
