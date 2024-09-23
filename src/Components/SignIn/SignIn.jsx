import React, { useState } from 'react';
import './signin.scss'; // You can style your component here
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError('');

    try {
      const response = await fetch('http://localhost:5550/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful sign-in (e.g., redirect to dashboard)
        console.log('User signed in successfully:', data);
        // You can store the JWT token in localStorage or state management
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Sign-in error:', err);
    }
  };

  return (
    <section className="signin-section">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default SignIn;
