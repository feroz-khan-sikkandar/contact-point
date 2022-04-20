import React, { useState } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const [emailError, setEmailError] = useState('');

  const [passwordError, setPasswordError] = useState('');

  const [password, setPassword] = useState();

  const navigate = useNavigate();

  // Validate email
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  // Validate password
  const validatePassword = (e) => {


    const re = /^[0-9\b]+$/;
    if (password === '' || re.test(password)) {

      setPasswordError('Valid Password)')
    } else {
      setPasswordError('Result Must be 10')
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
    navigate("/home")
  }


  return (
    <div className="signin-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => validateEmail(e)} />
          <span style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" min="10" max="10" className="form-control" placeholder="Enter password" onChange={(e) => validatePassword(e)} />
          <span style={{ fontWeight: 'bold', color: 'red', }}>{passwordError}</span>
        </div>
        <br />

        <button type="submit" className="btn btn-primary btn-block">Submit</button>

      </form>
    </div>
  )
}

export default LoginForm