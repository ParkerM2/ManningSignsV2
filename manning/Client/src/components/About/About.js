import React, { useState, useEffect } from 'react';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    CircularProgress,
    Container,
    CardContent,
    Card,
} from '@material-ui/core';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
    box: {
        color: '#0276aa',
        minHeight: '80vh',
        padding: '4vh',
    },
    mainFeaturedPostContent: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(4),
    },
    aboutText: {
        // height: 600,
        // width: 600,
        padding: '4vh'
    },
    divider: {
        padding: '4vh'
    },
    cover: {
        width: 300,
        [theme.breakpoints.down('md')]: {
            width: 0,
        },
        height: 180,
    },
    content: {
        flex: '1 0 auto',
        inlineSize: "min-content",
        whiteSpace: 'wrap'
    },
    root: {
        display: 'flex',
        background: 'linear-gradient(to right bottom, #4dabf5, #0e4686)',
        color: 'black',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

const font = "Niconne";

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
        const unsub = () => {
            setLoading(true)
            getData();
            console.log(currentAboutInfo)
        }

        return unsub();
        
    }, [])

    return (
        <>
            
                <Grid container direction="column" justifyContent="center" className={classes.box} >
                    {/* Amy / Dale descriptions and pictures w/ links to socials */}
                        <Container align="center">
                    <Typography variant="h4" style={{padding: '3vh', fontFamily: font}}> Meet Our Crew </Typography>
                            {!loading ? (
                            <>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                    <Card className={classes.root}>
                                            <CardContent className={classes.content}>
                                                <Typography  style={{fontFamily: font}} variant="h3">
                                                    {currentAboutInfo.about1.title}
                                                </Typography>
                                                <Typography style={{fontFamily: font}} variant="p">
                                                    {currentAboutInfo.about1.text}
                                                </Typography>
                                            </CardContent>
                                        
                                        <CardMedia  className={classes.cover} image={currentAboutInfo.about1.url} title={currentAboutInfo.about1.title} />
                                    </Card>
                                </Grid>

                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                    <Card className={classes.root}>
                                        
                                            <CardContent className={classes.content}>
                                                <Typography  style={{fontFamily: font}} variant="h3">
                                                    {currentAboutInfo.about2.title}
                                                </Typography>
                                                <Typography style={{fontFamily: font, color: 'black'}} variant="p">
                                                    {currentAboutInfo.about2.text}
                                                </Typography>
                                            </CardContent>
                                        <CardMedia className={classes.cover} image={currentAboutInfo.about2.url} title={currentAboutInfo.about1.title} />
                                    </Card>
                                </Grid>
                            </Grid>
                           </>
                            
                            ) : (
                            <Grid style={{ padding: '5vh'}} container alignItems="center">
                                <Container>
                                    <CircularProgress color="secondary" />
                                </Container>
                            </Grid> 
                            )
                        }
                        </Container>
                </Grid>
            
        </>
    )
};

export default HeroSection;