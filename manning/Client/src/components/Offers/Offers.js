import React, { useState, useEffect} from 'react';
// import { Link as LinkS } from 'react-scroll';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    Paper,
    Button,
    Container,
    Card,
    ButtonGroup,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
const font = "'Niconne', cursive";

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'lightblue',
        color: '#0276aa',
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
    mainFeaturedPostContent: {
        color: '#0276aa',
        position: 'relative',
        padding: theme.spacing(7),
        paddingTop: theme.spacing(12),
    },
    hero: {
        flexGrow: 1,
    },
    heroContent: {
    padding: theme.spacing(8, 0, 6),
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
        margin: theme.spacing(1),
    },
    },
}));


const Offers = () => {
    const classes = useStyles();

    // currentImages sets the collection to pull from in the gallery db
    const [currentImages, setCurrentImages] = useState('shirt');
    const [images, setImages] = useState();
    const [loading, setLoading] = useState(false);

    // docs is the response from firestore db where the objects containing the image info are stored
    const getData = async () => {
        const docRef = doc(db, 'gallery', currentImages);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            setImages(docSnap.data().images)
            setLoading(false)
        } else {
            console.log('no such')
        }
    };


    useEffect(() => {
        setLoading(true)
        getData();

    }, [currentImages])
    



 

    

    return (
        <>
            <div className={classes.hero}>
                <Paper className={classes.box}>
                    <Grid item md={12}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography variant="h3" style={{ fontFamily: font }} >
                                We offer a wide variety of <b>Sign</b> and <b>Shirt</b> solutions!
                            </Typography>
                        </div>
                    </Grid>
                    {/* gallery using buttons controlling state, mapping over array from backend firestore request */}
                    <Grid className={classes.buttons}>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('shirt')}>Shirts</Button>
                            <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('vehicle')}>Vehicles</Button>
                            <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('sign')}>Signs</Button>
                        </ButtonGroup>
                    </Grid>
                    <Container maxWidth="lg" color="inherit" component="main" className={classes.heroContent}>
                        <Grid container spacing={5} alignItems="flex-end">
                            {!loading ? (
                                images && images.map((image) => (
                                <Grid style={{ padding: '4vh' }} item key={image.id} xs={12} md={4}>
                                    <Card className={classes.root}>
                                        <CardMedia
                                            component="img"
                                            alt={image.title}
                                            height="300"
                                            src={image.url}
                                        />
                                    </Card>
                                </Grid>
                            ))) 
                            : 
                            (   
                                <Grid style={{ padding: '4vh' }} item xs={12} md={4}>
                                    <Card className={classes.root}>
                                        <CircularProgress color="secondary" />
                                    </Card>
                                </Grid>
                            )
                        }
                        </Grid>
                    </Container>
                </Paper>
            </div>
        </>
    )
};

export default Offers;