
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Login.css'; // Optional: include your styles here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here
    if (email && password){
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    
  } else {
    alert("Please enter valid credentials.");
  }
  };

  return (
    <div className="container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="form">

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
          />
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      
      </form>
    </div>
  );
};

export default Login;
