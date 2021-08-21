import React from 'react';
import backgroundImage from '../../images/396407.png';
import { Link as LinkS } from 'react-scroll';
import {
    Typography,
    makeStyles,
    Grid,
    Paper,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundImage: `url(${backgroundImage})`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '95vh',
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
}));

const font = "'Niconne', cursive";

const HeroSection = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.hero}>
                <Paper className={classes.box}>
                    <Grid container>
                        <Grid item md={8}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography variant="h3" style={{ fontFamily: font }} gutterBottom>
                                    <b>Discover how we can fulfill your sign and shirt needs</b>
                                </Typography>
                                <Button component={LinkS} to="services" variant="contained" color="secondary" >
                                    View our Services!
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    {/* ADD BUTTON TO GO DOWN */}
                </Paper>
            </div>
        </>
    )
};

export default HeroSection;
