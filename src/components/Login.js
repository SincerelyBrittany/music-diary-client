import React from 'react'
import { connect } from 'react-redux'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../actions/actionCreators'

const Login = (props) => {
  const { signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin } = props
  const { email, username, password, passwordConfirmation } = form

  const onSubmit = (e) => {
    e.preventDefault()
    if (signup){
      if (password == passwordConfirmation){
        sendSignup({username: username, email: email, password: password})
      } else {
        alert("Those passwords don't match!")
      }
    } else {
      sendLogin({email: email, password: password})
    }
  }

  return(
    <>
      <h3>{signup ? "Sign up!" : "Login!"} </h3>
      <form onSubmit={ onSubmit }>
        <label>
          email:
          <input type="text" name="email" value={email} onChange={handleLoginFormChange} />
        </label><br/>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handleLoginFormChange} />
        </label><br/>
        {signup &&
          <>
             <label>
              username:
              <input type="text" name="username" value={username} onChange={handleLoginFormChange} />
            </label>
            <label>
              Password Confirmation:
              <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange} />
            </label>
          </>
        }
        <br/>
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <br/>
      <button onClick={toggleSignup}>Or... {signup ? "Login!" : "Sign up!"}</button>
    </>
  )
}

const mapStateToProps = (state) => ({
  signup: state.user.signup,
  form: state.user.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)