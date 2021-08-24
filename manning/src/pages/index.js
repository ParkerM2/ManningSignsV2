import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Offers from '../components/Offers/Offers';
import Quote from '../components/Quote/Quote';
import shirts from '../images/tShirt.png';
import vehicle from '../images/vehiclewrap.jpg';
import carDecals from '../images/vehiclewrap.jpg';
import outdoorSigns from '../images/outdoorSign.jpg';
import Footer from '../components/Footer/Footer';
const font = "'Niconne', cursive";
// This Info will be called using a useEffect -> function(async/await) -> Axios -> DB

// controls navbar for login/logout buttons
const isLoggedIn = false;
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
    sign: [
        {
            url: outdoorSigns
        },
    ],
}



const Home = (props) => {
    const { user, isLoggedIn } = props;
    
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} user={user}/>
            <HeroSection />
            <About />
            <Offers images={images} />
            <Quote />
            <Footer font={font} />
        </>
    )
}

export default Home;
