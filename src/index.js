import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './App';

// Use the environment variable for the Stripe publishable key
const stripePromise = loadStripe('pk_test_51PslG4DNjvpmSwJTZbuJpoTnZGNZgjxHEzUOmJ7CIPwGAsxbz6MfSh0JWCQGQ4r8AMjmevIaEyC3Ez6dmgaWGC4Z00aLBW0Z99');

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);
