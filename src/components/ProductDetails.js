import React from 'react'

const styles = {
  class: {
    flexParent: {
      display: 'flex',
    },
    flexChild: {
      flex: 1,
      border: '0px solid yellow',
    },
    description: {
      fontSize: 40,
      display: 'inline',
      padding: '0 10px',
    },
  },
  h1: {
    textAlign: 'center',
    fontSize: 100,
    margin: 0,
  },
  section: {
    height: 'inherit',
    margin: '50px auto',
    width: 'fit-content',
  },
  div: {
  },
  img: {
    height: 250,
    margin: 20
  }
}

const ProductDetails = (props) => {
  return (
    <div>
      <h1 style={styles.h1}>scents</h1>
      <section style={Object.assign({}, styles.class.flexParent, styles.section)}>
        <div style={Object.assign({}, styles.class.flexChild, {textAlign: 'center'})}>
          <img
            style={styles.img}
            src="bare-scents-citrus-thyme.jpg" />
        </div>
        <div style={Object.assign({}, styles.class.flexChild, {textAlign: 'center'})}>
          <img
            style={styles.img}
            src="bare-scents-lavender-bud.jpg" />
        </div>
        <div style={Object.assign({}, styles.class.flexChild, {textAlign: 'center'})}>
          <img
            style={styles.img}
            src="bare-scents-orange-patchouli.jpg" />
        </div>
        <div style={Object.assign({}, styles.class.flexChild, {textAlign: 'center'})}>
          <img
            style={styles.img}
            src="bare-scents-tobacco-leaf.jpg" />
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
