import React from 'react';
import Form from './quoteforms/Form';
// import { Link as LinkS } from 'react-scroll';
import {
    makeStyles,
    Grid,
    Paper,
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
        backgroundColor: '#0276aa',
        color: 'lightblue',
        minHeight: '100vh',
        flexGrow: 1,
    },
    // serviceCardContainer: {
    //     paddingTop: '0vh'
    // },
    header: {
        padding:'4vh'
    },
    quoteFormContainer:{
        paddingTop: '6vh'
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
            <Paper className={classes.box}>
                <Grid container className={classes.header} justifyContent="center">
                    <Grid item>
                        <Typography variant="h2">
                            Services
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container className={classes.serviceCardContainer} justifyContent="center" spacing={3}>
                        {data && data.map((item) => (   
                                <Grid item>
                                    <ServiceCard key={item.id} img={item.img} primaryText={item.primaryText} secondaryText={item.secondaryText} />
                                </Grid>
                        ))}
                </Grid>
                    <Grid item className={classes.quoteFormContainer}>
                        <Form font={font}/>
                    </Grid>
            </Paper>
        </>
    )
};

export default Quote;