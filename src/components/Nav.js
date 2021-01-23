import React, {useState} from 'react';

const styles = {
  li: {
    a: {
      css: {
        color: 'black',
        textDecoration: 'none',
        padding: '4px 12px',
      },
      hover: {
        css: {
          color: 'black',
          borderBottom: '1px solid black',
        }
      }
    },
    css: {
      listStyle: 'none',
      float: 'left',

    }
  }
}

const Link = (props) => {
 const [hover, setHover] = useState(false)
 const style = hover
  ? Object.assign({}, styles.li.a.css, styles.li.a.hover.css)
  : styles.li.a.css
 return (
   <a
     style={style}
     href={props.href}
     onMouseEnter={() => setHover(true)}
     onMouseLeave={() => setHover(false)}>
       {props.text}
   </a>
 )
}

const Nav = (props) => {
  return (
    <nav style={{
      height: 'fit-content',
      paddingBottom: 15,
      padding: '20px 40px'
    }}>
      <img src={'bare_logo_blk_200.png'} width={100}/>
      <ul style={{
        float: 'right',
        marginTop: 11,
        marginRight: -15,
      }}>
        <li style={styles.li.css}>
          <Link text={'about'} href={'/about'} />
        </li>
        <li style={styles.li.css}>
          <Link text={'kickstarter'} href={'https://kickstarter.com'} />
        </li>
        <li style={styles.li.css}>
          <Link text={'contact'} href={'/contact'} />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
