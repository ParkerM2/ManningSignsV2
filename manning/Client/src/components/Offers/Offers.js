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
    CardContent,
    ButtonGroup,
    ImageList,
    ImageListItem,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import tshirt from '../Quote/quoteforms/tshirt1.png';
import vehicle from '../Quote/quoteforms/vehicle.png';
import sign from '../Quote/quoteforms/sign.png';
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
        padding: '4vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
        margin: theme.spacing(1),
    },
    },
    cover: {
        width: 200,
    },
    imageList: {
        backgroundColor: 'lightblue',
        width: 1000,
        height: 800,
    }
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
                <Grid className={classes.box}>

                    <Grid item md={12}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography variant="h3" style={{ fontFamily: font }} >
                                We offer a wide variety of <b>Sign</b> and <b>Shirt</b> solutions!
                            </Typography>
                        </div>
                    </Grid>
                    
                    <Grid className={classes.buttons}>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('sign')}>
                            <CardMedia
                                className={classes.cover}
                                component="img"
                                alt="sign"
                                height="160"
                                image={sign}
                                title="sign"
                                />
                            <Typography gutterBottom variant="h5" component="h2">
                                Signs
                            </Typography>
                            </Button>
                            <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('shirt')}>
                            <CardMedia
                                className={classes.cover}
                                component="img"
                                alt="blank t-shirt"
                                height="160"
                                image={tshirt}
                                title="tshirt"
                                />
                            <Typography gutterBottom variant="h5" component="h2">
                                Shirts
                            </Typography>
                            </Button>
                            <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('vehicle')}>
                            <CardMedia
                                className={classes.cover}
                                component="img"
                                alt="vehicle"
                                height="160"
                                image={vehicle}
                                title="vehicle"
                                />
                            <Typography gutterBottom variant="h5" component="h2">
                                Vehicles
                            </Typography>
                            </Button>
                        </ButtonGroup>
                    </Grid>

                    <Container maxWidth="lg" color="inherit" component="main" className={classes.heroContent}>
                        <ImageList rowHeight={420} className={classes.imageList}>
                            {!loading ? (
                                images && images.map((image) => (

                                        <ImageListItem key={image.id}>
                                                <img src={image.url} alt={image.title} />
                                        </ImageListItem>

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
                        </ImageList>
                    </Container>

                </Grid>
            </div>
        </>
    )
};

export default Offers;