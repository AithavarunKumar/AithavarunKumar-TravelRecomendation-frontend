import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Details from './Components/TripDetails/Details';
import SignUp from "./Components/SignUp/Signup";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  const location = useLocation();

  const isSignInOrSignUpPage = location.pathname === '/signin' || location.pathname === '/signup';
  const isDetailsPage = location.pathname.includes('/details/');

  return (
    <>
      {!isSignInOrSignUpPage && !isDetailsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {!isSignInOrSignUpPage && !isDetailsPage && <Main />}
      {!isSignInOrSignUpPage && !isDetailsPage && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
