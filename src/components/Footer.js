import React from 'react'

const styles = {
  div: {
    a: {
      css: {
        color: 'white',
        fontSize: 40,
        letterSpacing: 1,
        height: 'inherit',
        textDecoration: 'none',
      }
    },
    css: {
      height: 'fit-content',
      textAlign: 'center',
      paddingBottom: 20,
    }
  }
}

const Footer = (props) => {
  return (
    <div style={styles.div.css}>
      <div style={{padding: 5}}>
        <a style={styles.div.a.css} href="https://instagram.com/bare_pits">@bare_pits</a>
      </div>
      <div style={{padding: 5}}>&copy; Copyright 2018, Bare Deoderant</div>
    </div>
  )
}

export default Footer
