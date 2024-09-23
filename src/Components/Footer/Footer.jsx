import React,{useEffect}  from "react";
import './footer.css';
import './footer.scss'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import 'aos/dist/aos.css'
const Footer=()=>{
        useEffect(()=>{
                Aos.init({duration:2000})
        },[])
        return(
             <section className="footer">
                <div className="videoDiv">
                        <video src="Assets/video3.mp4" loop autoPlay muted type="video/mp4"></video>
                </div>

                <div className="secContent container">
                        <div className="contactDiv flex">
                                <div data-aos="fade-up" className="text">
                                        <small>KEEP IN TOUCH</small>
                                        <h2>Travel with us</h2>
                                </div>

                                <div className="inputDiv flex">
                                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                                        <button data-aos="fade-up" className="btn flex" type="submit">
                                        SEND <FiSend className="icon"/>
                                        </button>
                                </div>
                        </div>

                        <div className="footerCard flex">
                                <div className="footerIntro flex">
                                        <div className="logoDiv">
                                                <a href="#" className="logo flex">
                                                <MdOutlineTravelExplore className="icon"/>Travel.
                                                </a>
                                        </div>
                                        <div data-aos="fade-up" className="footerParagraph">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta laboriosam accusantium voluptates officia. Suscipit eius laborum obcaecati, eligendi dolorum explicabo et nihil cumque. Adipisci porro reprehenderit nam amet praesentium!
                                        </div>
                                        <div data-aos="fade-up" className="footerSocials flex">
                                        <FaYoutube className="icon"/>
                                        <FaSquareTwitter className="icon"/>
                                        <FaSquareInstagram className="icon"/>
                                        <BsFacebook className="icon"/>
                                        </div>
                                        
                                </div>
                                <div className="footerLinks grid">
                                                <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                                                      <span className="groupTitle">
                                                        OUR AGENCY
                                                        </span>  
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Services
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Insurance
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Agency      
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Tourism
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Payment
                                                        </li>
                                                </div>
                                                <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                                                      <span className="groupTitle">
                                                        LAST MINUTE
                                                        </span>  
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        London
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Califonia
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Indonesia      
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Europe
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Odisa
                                                        </li>
                                                </div>
                                                <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                                                      <span className="groupTitle">
                                                        PARTNERS
                                                        </span>  
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Bookings
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Rentcars
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        HostelWorld      
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Trivago
                                                        </li>
                                                        <li className="footerList flex">
                                                        <FiChevronRight className="icon"/>
                                                        Trip
                                                        </li>
                                                </div>
                                </div>

                                <div data-aos="fade-up" className="footerDiv flex">
                                        <small>BEST TRAVEL WEBSITE THEME</small>
                                        <small>COPYRIGHTS RESERVED --2024</small>
                                </div>
                        </div>
                </div>
             </section>
        )
}
export default Footer;