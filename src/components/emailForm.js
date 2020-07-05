import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import firebaseDB from '../util/firebase'

const EmailForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const [email, setEmail] = useState('')

  const submitEmailAddress = () => {
    firebaseDB
      .ref()
      .push({ email: email })
      .then(result => {
        alert(
          'Thank you your interest! We will notify you on our platform launch early access!'
        )
      })
      .catch(err => {
        console.log(err)
        alert("There's something wrong. Please re-submit")
      })
  }

  return (
    <form onSubmit={handleSubmit(submitEmailAddress)}>
      <input
        name="email"
        placeholder="email address"
        onChange={event => setEmail(event.target.value)}
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address entered',
          },
        })}
      />
      <p style={{ color: 'yellow', fontWeight: 'bold' }}>
        {errors.email && errors.email.message}
      </p>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  )
}

export default EmailForm
