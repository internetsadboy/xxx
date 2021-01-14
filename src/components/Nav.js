import React from 'react';

const styles = {
  li: {
    a: {},
    css: {
      listStyle: 'none',
      float: 'left',
      padding: '10px 12px',
      border: '1px solid',
    }
  }
}

const Nav = (props) => {
  return (
    <nav style={{border: '1px solid'}}>
      <h1 style={{border: '1px solid', width: 'fit-content', display: 'inline-block'}}>BARE</h1>
      <ul style={{border: '1px solid', float: 'right', width: 265, }}>
        <li style={styles.li.css}>
          <a href="/about">about</a>
        </li>
        <li style={styles.li.css}>
          <a href="https://kickstarter.com">kickstarter</a>
        </li>
        <li style={styles.li.css}>
          <a href="/contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
