import React, { useState, useEffect } from 'react';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    Paper,
    CircularProgress,
    Container,
} from '@material-ui/core';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

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

    // currentImages sets the collection to pull from in the gallery db
    const [currentAboutInfo, setCurrentAboutInfo] = useState();
    const [loading, setLoading] = useState(true);

    // docs is the response from firestore db where the objects containing the image info are stored
    const getData = async () => {
        const docRef = doc(db, 'gallery', 'about');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setCurrentAboutInfo(docSnap.data())
            setLoading(false)
        } else {
            console.log('no such')
        }
    };


    useEffect(() => {
        setLoading(true)
        getData();
    }, [])

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
                            {!loading ? 
                                <>
                                <Grid style={{ paddingBottom: '5vh' }} container alignItems="center" >
                                    <Grid style={{ padding: '4vh' }} item md={7} lg={9} >
                                        <Typography variant="h6">
                                            {currentAboutInfo.about1.text}
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ padding: '2vh' }} item md={3} sm={8} lg={2}>
                                        <CardMedia alt={currentAboutInfo.alt} src={currentAboutInfo.about1.url} component="img" />
                                    </Grid>
                                </Grid>
                                
                                <Grid style={{ paddingBottom: '5vh', paddingLeft: '2vh' }} container alignItems="center">
                                    <Grid style={{ padding: '4vh'}} item lg={2} md={3} sm={8}>
                                        <CardMedia alt={currentAboutInfo.about2.alt} src={currentAboutInfo.about2.url} component="img" />
                                    </Grid>
                                    <Grid style={{ padding: '4vh' }} item md={3} sm={8} lg={3}>
                                        <Typography align="right" variant="h6">
                                            {currentAboutInfo.about2.text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </>
                            : 
                            <Grid style={{ padding: '5vh'}} container alignItems="center">
                                <Container>
                                    <CircularProgress color="secondary" />
                                </Container>
                            </Grid> 
                            }
                </Paper>
            </div>
        </>
    )
};

export default HeroSection;