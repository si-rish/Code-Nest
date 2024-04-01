import React, { useState } from 'react';
import axios from 'axios';
import showToast from 'crunchy-toast';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const signup = async () => {
    try {
      const response = await axios.post('/signup', {
        username: username,
        email: email,
        password: password
      });
  
      console.log(response.data); // Log response data for debugging
  
      if (response.data.success) {
        showToast('User Resgistered Successfully', 'success', 3000);
        window.location.href = '/login';
      } else {
        alert(response.data.message); // Show error message if signup was not successful
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during signup. Please try again.'); // Show generic error message
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>

      <div>
        <h1 className="login-title">Join with us NOW..</h1>
      </div>
      <div className="main-container-signup ">
        <div className="img-container">
          <img src="https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" />
        </div>

        <div className="form-container">
          {/* <h1 className="signup-title">SignUp</h1> */}

          <div className="input-container">
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label className="label">Password</label>
            <div className="password-input">
              <input
                id="loggingPassword"
                className="input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className={`eye-icon ${showPassword ? 'open' : 'closed'}`} onClick={togglePasswordVisibility}></i>
            </div>
          </div>

          <div className="signup-button-container">
            <button className="signup-btn" onClick={signup}>
              Signup
            </button>
          </div>

          <div className="login-signup-btn">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;



// import axios from 'axios'
// import React, { useState } from 'react'
// import "./Signup.css"

// function Signup() {

//   const [username, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const signup = async () => {
//     const response = await axios.post("/signup", {
//       username: username,
//       email: email,
//       password: password
//     });

//     if (response.data.success) {
//       alert(response.data.message);
//       window.location.href = "/login";
//     }

//   }

//   return (
//     <div className='signup-page-background'>
//       <div className='signup-container'>
//         <h1 className='signup-title'>SignUp</h1>

//         <div className='input-container'>
//           <label className='input-label'>Name</label>
//           <input
//             type='text'
//             placeholder='Enter your name'
//             className='input-field'
//             value={username}
//             onChange={(e) => {
//               setName(e.target.value)
//             }}
//           />
//         </div>

//         <div className='input-container'>
//           <label className='input-label'>Email</label>
//           <input
//             type='email'
//             placeholder='Enter your email'
//             className='input-field'
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value)
//             }}
//           />
//         </div>


//         <div className='input-container'>
//           <label className='input-label'>Password</label>
//           <input
//             type='password'
//             placeholder='Enter your password'
//             className='input-field'
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value)
//             }}
//           />
//         </div>

//         <button
//           type='button'
//           className='signup-btn'
//           onClick={signup}>
//           Signup
//         </button>
//         <div className='login-signup-btn'>
//           <p>not have an account?<a href='/login'>Login</a></p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup