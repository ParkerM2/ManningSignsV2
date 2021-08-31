import React, { useState, useEffect } from 'react';
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
import api from '../utils/API';
const font = "'Niconne', cursive";


// This Info will be called using a useEffect -> function(async/await) -> Axios -> DB

// api call to get About info
// const getAboutInfo = async () => {
//     let info = await api.getAbout().then((res) => {
//         console.log('aboutInfo', res.data[0])
//     }).catch(err => {
//         console.log('aboutInfo error', err)
//     })

//     return info;
// };

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
    const [aboutInfo, setAboutInfo] = useState({});

    // useEffect gathers info from API and pushes it to the components
    useEffect(() => {

        api.getAbout().then((res) => {
            setAboutInfo(res.data[0])
        }).catch(err => {
            console.log('aboutInfo error', err)
        });
        
    }, []);
    
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} user={user} />
            <HeroSection />
            <About aboutInfo={aboutInfo} />
            <Offers images={images} />
            <Quote />
            <Footer font={font} />
        </>
    )
}

export default Home;
