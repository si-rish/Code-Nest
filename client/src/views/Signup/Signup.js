import axios from 'axios'
import React, { useState } from 'react'
import "./Signup.css"

function Signup() {

  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () => {
    const response = await axios.post("/signup", {
      username: username,
      email: email,
      password: password
    });

    if (response.data.success) {
      alert(response.data.message);
      window.location.href = "/login";
    }
  }

  return (
    <div className='signup-page-background'>
      <div className='signup-container'>
        <h1 className='signup-title'>SignUp</h1>

        <div className='input-container'>
          <label className='input-label'>Name</label>
          <input
            type='text'
            placeholder='Enter your name'
            className='input-field'
            value={username}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <div className='input-container'>
          <label className='input-label'>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            className='input-field'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>


        <div className='input-container'>
          <label className='input-label'>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            className='input-field'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>

        <button
          type='button'
          className='signup-btn'
          onClick={signup}>
          Signup
        </button>
        <div className='login-signup-btn'>
          <p>not have an account?<a href='/login'>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup