import React, { useEffect, useState } from "react";
import './main.css';
import './main.scss';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

const Main = () => {

        const [data, setData] = useState([]);
        const [darkMode, setDarkMode] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
                Aos.init({ duration: 2000 })
                // Fetch travel destinations from the backend
                fetch('http://localhost:5550/travel')
                        .then(response => response.json())
                        .then(data => setData(data))
                        .catch(error => console.error('Error fetching data:', error));

                const userPreference = localStorage.getItem('darkMode') === 'true';
                setDarkMode(userPreference);

        }, [])
        useEffect(() => {
                if (darkMode) {
                        document.body.classList.add('dark-mode');
                        localStorage.setItem('darkMode', 'true');
                } else {
                        document.body.classList.remove('dark-mode');
                        localStorage.setItem('darkMode', 'false');
                }
        }, [darkMode]);



        return (
                <section className="main container section">
                        <div data-aos="fade-right" className="secTitle">
                                <h3 className="title">
                                        Most Visited Destinations
                                </h3>
                                <div className="toggle-container">
                                        <label className="toggle">
                                                <input
                                                        type="checkbox"
                                                        checked={darkMode}
                                                        onChange={() => setDarkMode(!darkMode)}
                                                />
                                                <span className="slider"></span>
                                        </label>
                                        <span className="toggle-label">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                </div>
                        </div>

                        <div className="secContent gird">
                                {
                                        data.map(({ _id, imgSrc, destTitle, location, grade, fees, description }) => {
                                                return (
                                                        <div key={_id} className="singleDestination" data-aos="fade-up" data-aos-duration="300" // Animation duration in milliseconds
                                                                data-aos-easing="ease-in-out" // Easing function
                                                        >
                                                                <div className="imageDiv">
                                                                        <img src={imgSrc} alt={destTitle} />
                                                                </div>
                                                                <div className="cardInfo">
                                                                        <h4 className="destTitle">{destTitle}</h4>
                                                                        <span className="continent flex">
                                                                                <MdFavoriteBorder className="icon" onClick={() => navigate(`//${_id}`)} />
                                                                                <HiOutlineLocationMarker className="icon" />
                                                                              
                                                                                <span className="name">{location}</span>
                                                                                
                                                                        </span>
                                                                        <div className="fees flex">
                                                                                <div className="grade">
                                                                                        <span>{grade}<small>+1</small></span>
                                                                                </div>
                                                                                <div className="price">
                                                                                        <h5>${fees}</h5>
                                                                                </div>
                                                                        </div>
                                                                        <div className="desc">
                                                                                <p>{description}</p>
                                                                        </div>

                                                                        <button
                                                                                className="btn flex"
                                                                                onClick={() => navigate(`/details/${_id}`)}
                                                                        >
                                                                                DETAILS <LuClipboardCheck className="icon" />
                                                                        </button>
                                                                </div>
                                                        </div>
                                                )
                                        })


                                }
                        </div>
                </section>
        )
}
export default Main;