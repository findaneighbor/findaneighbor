import { useQuery } from 'graphql-hooks'
import React from 'react'
import { SuccessStory } from '../components'
import { SUCCESS_STORIES } from '../graphql'

export const Successes = ({ className = '', style = {} }) => {
  const { data: { success_story: stories = [] } = {}, error } = useQuery(SUCCESS_STORIES, {
    skipCache: true
  })

  return <div className='mx-auto max-w-2xl w-full py-12'>
    <h2 className='text-primary-500 text-center text-xl md:text-2xl font-semibold mb-8'>Success Stories</h2>
    {stories.map(story => <SuccessStory className='mb-12' key={story.id} story={story} />)}
  </div>
}
