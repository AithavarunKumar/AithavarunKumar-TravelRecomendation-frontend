import React, { useState }  from "react";
import './navbar.css'
import './navbar.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { PiDotsNineLight } from "react-icons/pi";
const Navbar=()=>{
        const [active,setActive]=useState('navBar');
        //Function to toggle navbar
        const showNav=()=>{
                setActive('navBar activeNavBar')
        }
         //Function to remove navbar
         const removeNav=()=>{
                setActive('navBar removeNavBar')
        }
        return(
                <section className="navBarSection">
                <header className="header flex">
                        <div className="logoDiv">
                                <a href="#" className="logo flex">
                                        <h1 id="TravelCompass"><MdOutlineTravelExplore className="icon"/>TravelCompass</h1>
                                </a>
                              
                        </div>

                        <div className={active}>
                                <ul className="navLists flex">
                                        <li className="navItems">
                                                <a href="#" className="navLink">Home</a>
                                        </li>
                                        <li className="navItems">
                                                <a href="#" className="navLink">packages</a>
                                        </li>
                                        <li className="navItems">
                                                <a href="#" className="navLink">About</a>
                                        </li>
                                        <li className="navItems">
                                                <a href="#" className="navLink">Shop</a>
                                        </li>
                                        <li className="navItems">
                                                <a href="#" className="navLink">Pages</a>
                                        </li>
                                        <li className="navItems">
                                                <a href="#" className="navLink">Contact</a>
                                        </li>
                                        <li className="navItems">
                                                <a href="#" className="navLink">Favourites</a>
                                        </li>

                                        <button className="btn">
                                                <a href="#">BOOK NOW</a>
                                        </button>

                                        
                                </ul>
                                

                                <div onClick={removeNav} className="closeNavBar">
                                <IoCloseCircleSharp   className="icon"/>
                                </div>

                                
                        </div>
                        <div onClick={showNav} className="toggleNavBar">
                                <PiDotsNineLight  className="icon"/>
                                </div>
                </header>
        </section>
        )
}
export default Navbar;