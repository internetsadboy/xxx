import React from 'react';

const styles = {
  li: {
    a: {
      css: {
        color: 'white',
        textDecoration: 'none',
      }
    },
    css: {
      listStyle: 'none',
      float: 'left',
      padding: '10px 12px',
    }
  }
}

const Nav = (props) => {
  return (
    <nav style={{
      height: 'fit-content',
      paddingBottom: 15,
      padding: '20px 40px'
    }}>
      <img src="bare_logo.png" />
      <ul style={{
        float: 'right',
        marginTop: 0,
        marginRight: -15,
      }}>
        <li style={styles.li.css}>
          <a style={styles.li.a.css} href="/about">about</a>
        </li>
        <li style={styles.li.css}>
          <a style={styles.li.a.css} href="https://kickstarter.com">kickstarter</a>
        </li>
        <li style={styles.li.css}>
          <a style={styles.li.a.css} href="/contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
