import React from 'react';

import { Link as LinkS } from 'react-scroll';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    Paper,
    Card,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'white',
    },
    paperImg: {
        backgroundImage: `url('https://via.placeholder.com/300/09f/fff.png')`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPostContent: {
        color: 'black',
        position: 'relative',
        padding: theme.spacing(6),
        paddingTop: theme.spacing(8),
    },
}));

const font = "'Niconne', cursive";

// take in props for about text??

const HeroSection = (props) => {
    const { aboutInfo } = props;
    const classes = useStyles();
    return (
        <>
            <div>
                <Paper className={classes.box}>
                    <Grid item md={12}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography variant="h3" style={{ fontFamily: font }} gutterBottom>
                                Manning Signs <b>family</b> owned and operated
                            </Typography>
                        </div>
                    </Grid>
                    {/* Amy / Dale descriptions and pictures w/ links to socials */}
                    <Grid container justify="space-around" alignItems="center" md={12}>
                        <Grid style={{ padding: '4vh' }} item md={7} lg={8} >
                            <Typography variant="h6">
                                {aboutInfo.about1}
                            </Typography>
                        </Grid>
                        <Grid style={{ padding: '1vh' }} item lg={3} md={3} sm={8} lg={2}>
                            <CardMedia src="https://via.placeholder.com/150/09f/fff.png" component="img" />
                        </Grid>
                    </Grid>
                    <Grid style={{ paddingBottom: '5vh' }} container justify="space-around" alignItems="center" md={12}>
                        <Grid style={{ padding: '1vh' }} item lg={2} md={3} sm={8}>
                            <CardMedia src="https://via.placeholder.com/150/09f/fff.png" component="img" />
                        </Grid>
                        <Grid style={{ padding: '4vh' }} item md={7}>
                            <Typography variant="h6">
                                {aboutInfo.about2}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    )
};

export default HeroSection;