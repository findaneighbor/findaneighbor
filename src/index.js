import React from 'react'
import { render } from 'react-dom'

export const App = props => {
  return <main className='h-screen flex-center text-2xl text-blue-600'>Find a neighbor. Be a neighbor!</main>
}

render(<App />, document.getElementById('app'))
