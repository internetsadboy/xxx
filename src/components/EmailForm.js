import React from 'react'

const styles = {
  form: {
    div: {
      p: {
        css: {
          margin: 0,
          fontSize: 30,
          letterSpacing: 1,
          padding: 25,
          textAlign: 'center',
        }
      },
      css: {
        margin: '0 !important',
      },
    },
    div3: {
      button: {
        css: {
          background: '#05cf77',
          border: 'transparent',
          outline: 0,
          borderColor: 'white',
          borderRadius: 2,
      		boxShadow: '0 0 10px 2px rgba(0, 0, 0, .1)',
          color: 'white',
          cursor: 'pointer',
          fontSize: 18,
          padding: 18,
          transition: 'all 200ms ease-in',
          width: 336,
        }
      },
      css: {}
    },
    css: {
      border: '0px solid red',
    }
  },
  class: {
    formField: {
      margin: '20px 0',
    },
    textField: {
      width: 300,
      background: 'white',
      color: 'black',
      font: 'inherit',
      boxShadow: '0 6px 11px 0px rgba(0, 0, 0 , .12)',
      border: 0,
      outline: 0,
      padding: 18,
      letterSpacing: 2,
      fontWeight: 300,
      fontSize: 18,
    }
  }

}

const EmailForm = (props) => {
  return (
    <section style={{textAlign: 'center'}}>
      <form style={styles.form.css}>
        <div style={styles.form.div.css}>
          <p style={styles.form.div.p.css}>Get notified when we go live on Kickstarter!</p>
        </div>
        <div style={styles.class.formField}>
          <input style={styles.class.textField} type="text" name="name" placeholder="Full name" />
        </div>
        <div style={styles.class.formField}>
          <input style={styles.class.textField} type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <button style={styles.form.div3.button.css} type="submit" className="btn btn--primary btn--inside uppercase">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default EmailForm
