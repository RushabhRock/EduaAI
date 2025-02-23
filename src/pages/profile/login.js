import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Create this CSS file
import logo from './mainlogo.jpg'; // Import your logo

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-div">
      <div className="logo">
        <img src={logo} alt="EduAI Logo" />
      </div>
      <div className="title">EduAI</div>
      <div className="sub-title">Login Page</div>
      <form onSubmit={handleSubmit} className="fields"> {/* Added form element */}
        <div className="input-group"> {/* Bootstrap input group for icon */}
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <input
            type="email"
            className="form-control" // Bootstrap form control
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Added required attribute
          />
        </div>
        <div className="input-group mt-3"> {/* Margin top for spacing */}
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-button mt-3">Login</button> {/* Submit button and margin top */}
        <div className="link mt-3">
          <a href="#">Forgot password?</a> or <a href="/register">Sign Up</a> {/* Link to registration */}
        </div>
      </form>
    </div>
  );
};


const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., API call)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Registration submitted:', { email, password });
  };

  return (
    <div className="login-div"> {/* Same styling as login */}
      <div className="logo">
        <img src={logo} alt="EduAI Logo" />
      </div>
      <div className="title">EduAI</div>
      <div className="sub-title">Register</div>
      <form onSubmit={handleSubmit} className="fields">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group mt-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group mt-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signin-button mt-3">Register</button>
        <div className="link mt-3">
          <a href="/">Login</a> {/* Link back to login */}
        </div>
      </form>
    </div>
  );
};


export { LoginPage, RegisterPage }; // Export both components