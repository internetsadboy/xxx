import React from 'react'

import Nav from './Nav'
import ProductDetails from './ProductDetails'
import EmailForm from './EmailForm'

const styles = {
  section: {
    marginBottom: 60,
    marginTop: -75,
    textAlign: 'left',
    position: 'absolute',
    top: 635,
    left: 30,
  },
  class: {
    description: {
      fontSize: 35,
      display: 'inline',
      padding: '0 40px',
      fontWeight: 100,
      letterSpacing: 2,
      textAlign: 'center',
    },
  }
}

const Main = (props) => {
  return (
    <main>
      <div style={{
        height: 728,
        backgroundImage: "url('bare-03603.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        }}></div>
      <div style={{textAlign: 'center', margin: 60, marginTop: 90}}>
        <h1 style={styles.class.description}>All natty deo.</h1>
        <h1 style={styles.class.description}>Refillable.</h1>
        <h1 style={styles.class.description}>Vegan.</h1>
        <h1 style={styles.class.description}>Works.</h1>

      </div>
      <div style={{height: 450, marginBottom: 5}}>
        <ProductDetails />
      </div>
      <div style={{height: props.height}}>
        <EmailForm />
      </div>
    </main>
  )
}

export default Main
