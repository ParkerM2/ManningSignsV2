import React from 'react';
import Form from './quoteforms/Form';
import { Link as LinkS } from 'react-scroll';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'white',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '95vh',
    },
    paperImg: {
        backgroundImage: `url('https://via.placeholder.com/300/09f/fff.png')`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'fit-to-size',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        color: 'black',
        position: 'relative',
        padding: theme.spacing(7),
        paddingTop: theme.spacing(12),
    },
    hero: {
        flexGrow: 1,
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
                    <Grid container spacing={2}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography variant="h3" style={{ fontFamily: font }} gutterBottom>
                                Quote Form
                            </Typography>
                        </div>
                    </Grid>
                    <Grid>
                        <Form />
                    </Grid>
                </Paper>
            </div>
        </>
    )
};

export default Quote;