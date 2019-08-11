import React from 'react';
import '../loginform.css'

const LoginForm = (props) => {
  return (
    <form id="login-form">
      <div className="field-form">
        <label className="label">Email</label>
        <br></br>
        <input id="email" onChange={props.inputChangeHandler}></input>
      </div>

      <div className="field-form">
        <label className="label">Password</label>
        <br></br>
        <input id="password" onChange={props.inputChangeHandler}></input>
      </div>
      <button onClick={(e) => props.loginHandler(e)} id="submit">Proceed</button>
    </form>
  )
}

export default LoginForm;