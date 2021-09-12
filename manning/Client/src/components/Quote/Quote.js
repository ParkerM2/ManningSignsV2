import React from 'react';
import Form from './quoteforms/Form';
// import { Link as LinkS } from 'react-scroll';
import {
    makeStyles,
    Grid,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: '#0276aa',
        color: 'lightblue',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        hero: {
            flexGrow: 1,
        }
    }
}));

const font = "'Niconne', cursive";

// take in props for about text??

const Quote = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.hero}>
                <Paper className={classes.box}>
                    <Grid>
                        <Form font={font}/>
                    </Grid>
                </Paper>
            </div>
        </>
    )
};

export default Quote;