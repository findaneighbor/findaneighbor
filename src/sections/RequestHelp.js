import React, { useEffect } from 'react'
import { RequestForm } from '../components'

export const RequestHelp = ({ className = '', style = {} }) => {
  useEffect(() => {
    window.scroll({
      top: 0
    })
  }, [])

  return <div className='all min-h-md w-full'>
    <RequestForm />
  </div>
}
