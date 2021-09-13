import React, { useState, useEffect } from 'react';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    Paper,
    CircularProgress,
    Container,
    Divider,
} from '@material-ui/core';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: '#0276aa',
        color: 'lightblue',
        minHeight: '100vh',
        flexGrow: 1,
    },
    paperImg: {
        backgroundImage: `url('https://via.placeholder.com/300/09f/fff.png')`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'lightblue'
    },
    mainFeaturedPostContent: {
        color: 'lightblue',
        position: 'relative',
        padding: theme.spacing(6),
        paddingTop: theme.spacing(8),
    },
    aboutText: {
        // height: 600,
        // width: 600,
        padding: '4vh'
    },
    divider: {
        padding: '4vh'
    },
    media: {
        height: 400,
        width: 400
    }
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
                <Grid className={classes.box}>
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
                                <Grid item className={classes.divider}>
                                    <Divider />
                                </Grid>

                                <Grid style={{paddingLeft: '4vh'}}>
                                        <Typography variant="h3">{currentAboutInfo.about1.title}</Typography>
                                </Grid>

                                <Grid container justifyContent="center" spacing={8}>
                                    <Grid lg={6} md={12} sm={12} item>
                                        <Typography className={classes.aboutText} variant="h6">
                                            {currentAboutInfo.about1.text}
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <CardMedia className={classes.media} alt={currentAboutInfo.about1.alt} src={currentAboutInfo.about1.url} component="img" />
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.divider}>
                                    <Divider />
                                </Grid>

                                <Grid style={{paddingLeft: '4vh'}}>
                                        <Typography variant="h3">{currentAboutInfo.about2.title}</Typography>
                                </Grid>

                                <Grid container justifyContent="center" spacing={8}>
                                    <Grid lg={6} md={12} sm={12} item>
                                        <Typography className={classes.aboutText} variant="h6">
                                            {currentAboutInfo.about2.text}
                                        </Typography>
                                    </Grid>

                                    <Grid item >
                                        <CardMedia className={classes.media} alt={currentAboutInfo.about2.alt} src={currentAboutInfo.about2.url} component="img" />
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
                </Grid>
            </div>
        </>
    )
};

export default HeroSection;