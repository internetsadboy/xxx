import React from 'react'
import {render} from 'react-dom'

import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

const App = (props) => {
  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

render(
  <App name={'bare'} />,
  document.getElementById('root')
)
