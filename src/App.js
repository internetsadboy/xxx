import React from 'react'
import {render} from 'react-dom'

const App = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

render(
  <App name={'bare'} />,
  document.getElementById('root')
)
