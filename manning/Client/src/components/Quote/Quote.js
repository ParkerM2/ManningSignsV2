import React from 'react';
import Form from './quoteforms/Form';
// import { Link as LinkS } from 'react-scroll';
import {
    makeStyles,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: '#0276aa',
        color: 'lightblue',
        minHeight: '100vh',
    }
}));

const font = "'Niconne', cursive";

// take in props for about text??

const Quote = () => {
    const classes = useStyles();
    return (
        <>
                <Paper className={classes.box}>
                    <Grid container>
                        <Typography>
                            Hello jalkjd;flajdlskjfal;ksjf;aldksjf;
                        </Typography>
                    </Grid>
                    <Grid>
                        <Form font={font}/>
                    </Grid>
                </Paper>
        </>
    )
};

export default Quote;