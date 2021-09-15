import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import About from '../../components/About/About';
import Offers from '../../components/Offers/Offers';
import Quote from '../../components/Quote/Quote';
import Footer from '../../components/Footer/Footer';
import {
    Container,
    Paper,
    Grid,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    background: {
        background: 'linear-gradient(to right bottom, #4dabf5, #0e4686)',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        padding: '4vh'
    },
    paper: {
        background: '#e0e0e0'
    }
}));

const Home = () => {
    const classes = useStyles();
    
    return (
        <>
            <HeroSection />
            
            <Grid className={classes.background}>
            <Container >
            <Paper elevation={3} className={classes.paper} >
            <Quote />
            <Offers/>
            <About />
            </Paper>
            </Container>
            </Grid>
            <Footer/>
        </>
    )
};

export default Home;