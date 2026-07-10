'use client';

import { login } from '../actions/auth';
import { useFormState } from 'react-dom';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState(null);
  
  async function handleSubmit(formData) {
    const res = await login(formData);
    if (res?.error) {
      setError(res.error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Manager Access</h1>
          <p>Login to the Task Management System</p>
        </div>
        
        <div className="demo-hint" style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.85rem', textAlign: 'center' }}>
          <strong>Demo Login:</strong> Username: <code>admin</code> | Password: <code>password123</code>
        </div>
        
        <form action={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your username" 
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
