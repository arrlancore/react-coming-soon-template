import React from 'react'

const EmailInput = ({ email, onEmailChangeHandler, submitEmailAddress }) => (
  <div>
    <input
      name="email"
      type="text"
      placeholder="email address"
      value={email}
      onChange={onEmailChangeHandler}
    />
    <button className="button" onClick={submitEmailAddress}>
      Submit
    </button>
  </div>
)

export default EmailInput
