import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import About from '../components/About/About';

// This Info will be called using a useEffect -> function(async/await) -> Axios -> DB

// controls navbar for login/logout buttons
const isLoggedIn = true;
// userInfo or Admin info
const user = {
    userID: 'administrator',
    username: "Parker",
    // password * 

}


const Home = () => {

    
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} user={user}/>
            <HeroSection />
            <About />
            <HeroSection />
        </>
    )
}

export default Home;
