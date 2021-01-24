import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const REGEX = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

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
          width: '-webkit-fill-available',
        }
      },
      css: {}
    },
    css: {
      width: 336,
      margin: '0 auto',
    }
  },
  class: {
    formField: {
      margin: '20px auto',
      // width: 'inherit',
    },
    textField: {
      width: '-webkit-fill-available',
      background: 'white',
      color: 'black',
      font: 'inherit',
      boxShadow: '0 6px 11px 0px rgba(0, 0, 0 , .12)',
      border: 0,
      outline: 0,
      padding: 18,
      letterSpacing: 2,
      fontWeight: 300,
      fontSize: 18
    },
    errorBox: {
      backgroundColor: '#f91b1b73',
      padding: 10,
      borderRadius: 4,
      fontFamily: 'helvetica',
      fontWeight: 200,
      color: 'darkred',
    },
    confirmation: {
      p: {
        css: {
          margin: 0,
          marginTop: 15,
        }
      },
      css: {
        fontSize: 30,
        fontWeight: 200,
        letterSpacing: 2,
        marginTop: 50,
      }
    }
  }
}

const Form = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmit)}
      style={styles.form.css}
    >
      <div style={styles.class.formField}>
        <input
          style={styles.class.textField}
          type="text"
          name="name"
          placeholder="Full name"
          ref={props.register({required: true, maxLength: 20})}/>
          {
            props.errors.name && <p style={styles.class.errorBox}>{props.errors.name && "Full name is required"}</p>
          }
      </div>
      <div style={styles.class.formField}>
        <input
          style={styles.class.textField}
          type="text"
          name="email"
          placeholder="Email"
          ref={props.register({required: true, pattern: REGEX.EMAIL})}
        />
        {
          props.errors.email && <p style={styles.class.errorBox}>{props.errors.email && "A valid email is required"}</p>
        }
      </div>
      <div style={styles.class.formField}>
        <button
          style={styles.form.div3.button.css}
          type="submit">
            Submit
        </button>
      </div>
    </form>
  )
}

const EmailForm = (props) => {
  const [submit, setSubmit] = useState(false);
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    setSubmit(true)
  }

  return (
    <section style={{textAlign: 'center'}}>
      <div style={styles.form.div.css}>
        <p style={styles.form.div.p.css}>Get notified when we go live on Kickstarter!</p>
      </div>
      {
        !submit ?
        <Form
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        /> :
        <div style={styles.class.confirmation.css}>
          <p style={styles.class.confirmation.p.css}>{'Thanks for being a part of Bare\'s journey!'}</p>
          <p style={styles.class.confirmation.p.css}>{'We\'ll keep you updated.'}</p>
        </div>
      }
    </section>
  )
}

export default EmailForm
