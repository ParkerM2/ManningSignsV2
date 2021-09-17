import React from 'react';
import backgroundVideo from '../../videos/lights.mp4';
import VideoPlayer from "react-background-video-player";
import {Link} from 'react-scroll';
import {
    Typography,
    makeStyles,
    Grid,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    video: {
        objectFit: 'cover',
    },
    box: {
        // backgroundImage: `url(${backgroundImage})`,
        objectFit: 'cover',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
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
        color: '',
        position: 'relative',
        textAlign: 'center',
        padding: theme.spacing(7),
        paddingTop: '40vh',
    },
}));

const font = "'Niconne', cursive";

const HeroSection = () => {
    const classes = useStyles();
    return (
        <>
            
                <Grid className={classes.box}>
                    <VideoPlayer 
                        className={classes.video}
                        src={backgroundVideo}
                        autoPlay={true}
                        muted={true}
                    />
                    <Grid container>
                        <Grid item md={12}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography variant="h2" style={{ fontFamily: font, color : "white" }} gutterBottom>
                                    <b>Discover how we can fulfill your sign and shirt needs</b>
                                </Typography>
                                <Link to="service" smooth={true}>
                                <Button  variant="contained" style={{backgroundColor: "#0276aa", color: 'white'}} >
                                    View our Services!
                                </Button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                    {/* ADD BUTTON TO GO DOWN */}
                </Grid>
            
        </>
    )
};

export default HeroSection;
