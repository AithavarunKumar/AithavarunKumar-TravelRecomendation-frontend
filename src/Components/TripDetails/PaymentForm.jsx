import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './details.scss';

const PaymentForm = ({ amount, tripId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch("http://localhost:5550/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        setError("Failed to fetch client secret");
        console.error('Error fetching client secret:', error);
      }
    };

    fetchClientSecret();
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (!clientSecret) {
      setError("Client secret is missing.");
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setError(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      setSucceeded(true);
      try {
        await fetch("http://localhost:5550/save-payment-details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tripId,
            amount,
            paymentId: paymentIntent.id,
          }),
        });
      } catch (error) {
        setError("Error saving payment details");
        console.error("Error saving payment details:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="paymentform">
      <CardElement />
      <button type="submit" disabled={!stripe || succeeded}>
        {succeeded ? 'Payment Succeeded' : `Pay $${amount}`}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default PaymentForm;
