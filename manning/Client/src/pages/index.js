import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Offers from '../components/Offers/Offers';
import Quote from '../components/Quote/Quote';
import Footer from '../components/Footer/Footer';
const font = "'Niconne', cursive";

// controls navbar for login/logout buttons
const isLoggedIn = false;
// userInfo or Admin info
const user = {
    userID: 'administrator',
    username: "Parker",
    // password * 

}


const Home = () => {
    
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} user={user} />
            <HeroSection user={user}/>
            <About />
            <Offers />
            <Quote />
            <Footer font={font} />
        </>
    )
}

export default Home;
