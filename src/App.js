import React from 'react'
import {render} from 'react-dom'

import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'



const App = (props) => {
  return (
    <div>
      <Nav height={100} />
      <Main height={400} />
      <Footer height={100} />
    </div>
  )
}

render(
  <App name={'bare'} />,
  document.getElementById('root')
)
