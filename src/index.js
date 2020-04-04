import React from 'react'
import { render } from 'react-dom'
import { App } from './sections'
import { BrowserRouter } from 'react-router-dom'

if (process.env.NODE_ENV === 'development') {
  document.title = 'Local | Find A Neighbor'
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
