import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import About from '../../components/About/About';
import Offers from '../../components/Offers/Offers';
import Quote from '../../components/Quote/Quote';
import Footer from '../../components/Footer/Footer';
const font = "'Niconne', cursive";



const Home = () => {
    
    return (
        <>
            <HeroSection />
            <Quote />
            <Offers/>
            <About />
            <Footer/>
        </>
    )
};

export default Home;
