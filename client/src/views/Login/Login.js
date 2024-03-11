import React, {useState} from 'react'
import axios from 'axios'
import showToast from 'crunchy-toast';


import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('/login', {
        email: email,
        password: password,
      });
  
      if (response.data.success) {
        showToast('Login Successfully', 'success', 3000);
        localStorage.setItem('user', JSON.stringify(response.data.data));
        window.location.href = '/community';
      } else {
        showToast('Invalid email or password', 'warning', 3000);
      }
    } catch (error) {
      console.error(error);
      showToast('Invalid email or password', 'warning', 3000);
    }
  };
  
  

  return (
    <div className='login-page-background'>
      <div className='login-container'>
        <h1 className='login-title'>LogIn</h1>

        <div className='input-container'>
            <label className='input-label'>Email</label>
            <input
                type='email'
                placeholder='xyz@example.com'
                className='input-field'
                value={email}
                onChange={(e)=>{
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
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                />
        </div>

        <button className='login-btn' onClick={login}>
          Login
        </button>

        <div className='login-signup-btn'>
          <p>not have an account?<a href='/signup'>Signup</a></p>
          
        </div>
      </div>
    </div>
  )
}

export default Login