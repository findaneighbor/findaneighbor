import React from 'react'
import { render } from 'react-dom'

export const App = props => {
  return <main>Hello World!</main>
}

render(<App />, document.getElementById('app'))
