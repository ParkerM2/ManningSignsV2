import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Offers from '../components/Offers/Offers';
import shirts from '../images/tShirt.png';
import vehicle from '../images/vehiclewrap.jpg';
import carDecals from '../images/vehiclewrap.jpg';
import outdoorSigns from '../images/outdoorSign.jpg';
// This Info will be called using a useEffect -> function(async/await) -> Axios -> DB

// controls navbar for login/logout buttons
const isLoggedIn = true;
// userInfo or Admin info
const user = {
    userID: 'administrator',
    username: "Parker",
    // password * 

}
// images for gallery 
const images = {
    shirt: [
        {
            url: shirts,
        },
        
    ],
    vehicle: [
        {
            url: vehicle
        },
    ],
    car: [
        {
            url: carDecals
        },
    ],
    outdoor: [
        {
            url: outdoorSigns
        },
    ],
    window: [
        {
            url: outdoorSigns
        },
    ]
}



const Home = () => {

    
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} user={user}/>
            <HeroSection />
            <About />
            <Offers images={images}/>
        </>
    )
}

export default Home;
