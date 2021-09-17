import React from 'react';
import Form from './quoteforms/Form';
// import { Link as LinkS } from 'react-scroll';
import {
    makeStyles,
    Grid,
    Typography,
    Container,
} from '@material-ui/core';
import ServiceCard from './quoteforms/ServicesCard';
import tshirt from './quoteforms/tshirt1.png'
import sign from './quoteforms/sign.png';
import vehicle from './quoteforms/vehicle.png';
const font = "'Niconne', cursive";

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: '',
        color: '#0276aa',
        minHeight: '100vh',
        padding: '4vh',
    },
    header: {
        padding:'4vh'
    },
    quoteFormContainer:{
        paddingTop: '6vh',
        paddingBottom: '4vh',
        alignContent: 'center',
        alignItems: 'center'
    },
    paper: {
        backgroundColor: 'lightblue',
        color: '#0276aa',
    },
    root: {
            maxWidth: 345,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right bottom, #4dabf5, #0e4686)',
    },
    cover: {
        width: 200,  
    },
    serviceCardContainer: {
        alignItems: 'center',
    }
}));


// create for to update/change this info and have it stored on server later
const data = [
    {
        id: 0,
        img : sign,
        primaryText: 'Signs',
        secondaryText: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica blah blah blah lakjd;lakjf'
    },
    {
        id: 1,
        img : tshirt,
        primaryText: 'Apparel',
        secondaryText: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica blah blah blah lakjd;lakjf'
    },
    {
        id: 2,
        img: vehicle,
        primaryText: 'Vehicle Graphics',
        secondaryText: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica blah blah blah lakjd;lakjf'
    }
]

const Quote = () => {
    const classes = useStyles();
    return (
        <>
            <Grid id="service" container lg={12} md={12} sm={12} className={classes.box} justifyContent="center">
                <Grid  item >
                
                <Grid container className={classes.header}>
                    <Container>
                        <Typography style={{fontFamily: font}} align="center" variant="h2">
                            Services
                        </Typography>
                    </Container>
                </Grid>
                <Grid container className={classes.serviceCardContainer} justifyContent="center" spacing={3}>
                        {data && data.map((item) => (   
                                <Grid item lg={4} sm={6} md={4} xs={10}>
                                    <ServiceCard root={classes.root} cover={classes.cover} image={classes.image} key={item.id} img={item.img} primaryText={item.primaryText} secondaryText={item.secondaryText} />
                                </Grid>
                        ))}
                </Grid>
                    <Grid container lg={12} md={12} xl={12} justifyContent="center" className={classes.quoteFormContainer}>
                        <Grid item>
                            <Form font={font}/>
                        </Grid>
                    </Grid> 
                </Grid>
            </Grid>
        </>
    )
};

export default Quote;