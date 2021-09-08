import React from 'react';
import { useFirestore } from '../../hooks/getDocs';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: '',
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

const HeroSection = () => {
    const classes = useStyles();

    // returns array of about info:
    // ex: docs[0].about.alt = image alt ** .id = id ** .text = text field 
    // ** .title = title * .url = img url
    // const { docs } = useFirestore('about');

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
                    {/* {docs &&
                        docs.map((about) => (
                            <>
                                <Grid style={{ paddingBottom: '5vh' }} container alignItems="center" >
                                    <Grid style={{ padding: '4vh' }} item md={7} lg={9} >
                                        <Typography variant="h6">
                                            {about.about1.text}
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ padding: '2vh' }} item md={3} sm={8} lg={2}>
                                        <CardMedia alt={about.about1.alt} src={about.about1.url} component="img" />
                                    </Grid>
                                </Grid>
                                
                                <Grid style={{ paddingBottom: '5vh', paddingLeft: '2vh' }} container alignItems="center">
                                    <Grid style={{ padding: '4vh'}} item lg={2} md={3} sm={8}>
                                        <CardMedia alt={about.about2.alt} src={about.about2.url} component="img" />
                                    </Grid>
                                    <Grid style={{ padding: '4vh' }} item md={3} sm={8} lg={3}>
                                        <Typography align="right" variant="h6">
                                            {about.about2.text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </>
                        ))} */}
                </Paper>
            </div>
        </>
    )
};

export default HeroSection;