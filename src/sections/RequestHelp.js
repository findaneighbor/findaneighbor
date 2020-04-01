import React, { useEffect } from 'react'
import { RequestForm, Disclaimer } from '../components'

export const RequestHelp = ({ className = '', style = {} }) => {
  useEffect(() => {
    window.scroll({
      top: 0
    })
  }, [])

  return <div className='py-12 px-4 w-full'>
    <Disclaimer className='mb-12' />
    <RequestForm />
  </div>
}
