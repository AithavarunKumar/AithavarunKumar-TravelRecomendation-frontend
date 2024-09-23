import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useParams } from "react-router-dom";
import './details.scss';
import { SiContactlesspayment } from "react-icons/si";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm'; // Make sure this is the correct path to your PaymentForm component
import { BiTrip } from "react-icons/bi";

const stripePromise = loadStripe('your-publishable-key');

const Details = () => {
  const { id } = useParams(); // Extract the ID from URL params
  const [tripDetails, setTripDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    if (id) { // Check if the ID is defined
      fetch(`http://localhost:5550/travel/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data); // Check if data is being fetched correctly
          setTripDetails(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!tripDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="detailsContainer">
      <div className="singleDestination">
        <div className="imageDiv">
          <img src={tripDetails.imgSrc} alt={tripDetails.destTitle} />
        </div>
        <div className="cardInfo">
          <h4 className="destTitle">{tripDetails.destTitle}</h4>
          <span className="continent flex">
            <HiOutlineLocationMarker className="icon" />
            <span className="name">{tripDetails.location}</span>
          </span>
          <div className="fees flex">
            <div className="grade">
              <span>{tripDetails.grade}<small>+1</small></span>
            </div>
            <div className="price">
              <h5>${tripDetails.fees}</h5>
              <div className="payment">
                <SiContactlesspayment className="icon" />
                <button className="btn flex" onClick={() => setShowPayment(!showPayment)}>Pay</button>
              </div>
            </div>
          </div>
          <div className="desc">
            <p>{tripDetails.description}</p>
          </div>
        </div>
      </div>
      {showPayment && (
        <div className="paymentcontainer">
          <BiTrip className="icon"/><h1>Pay to start your journey</h1>
          <div className="payment-toggle">
            <div className="payment-card">

              <h4>Enter your card details :</h4>
              <label htmlFor="">Email</label><br />
              <input type="text" name="" id=""/><br />
              <label htmlFor="">cardholder name</label><br />
              <input type="text" />
              <label htmlFor="">card information</label>
              <Elements stripe={stripePromise}>
                <PaymentForm amount={tripDetails.fees} />
              </Elements>
             

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
