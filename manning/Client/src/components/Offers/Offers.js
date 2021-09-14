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
        backgroundColor: 'white',
        color: 'lightblue',
        minHeight: '80vh',
        padding: '4vh',
    },
    
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),      
    },
    mainFeaturedPostContent: {
        display: 'flex',
        alignItems: 'center',
        color: '#0276aa',
        padding: theme.spacing(4),
        paddingTop: theme.spacing(4),
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
    },
    cover: {
        maxWidth: 200,
        minHeight: 100
    },
    imageList: {
        backgroundColor: 'lightblue',
        maxWidth: 800,
        maxHeight: 800,
    },
    paper: {
        minWidth: '80%'
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
                <Grid container justifyContent="center" className={classes.box} xl={12} lg={12} md={12} sm={12} >
                    <Grid item>
                        <Paper style={{backgroundColor: 'lightblue'}} className={classes.paper}>
                            <Grid item md={12} lg={12} sm={12} xs={12} className={classes.mainFeaturedPostContent}>
                                <Container>
                                    <Typography align="center" variant="h5" style={{ fontFamily: font }} >
                                        We offer a wide variety of <b>Sign</b> and <b>Shirt</b> solutions!
                                    </Typography>
                                </Container>
                            </Grid>
                        
                            <Grid item xs={3} lg={12} md={!2} sm={12} className={classes.buttons}>
                                <ButtonGroup style={{padding:'1vh'}}>
                                    <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('sign')}>
                                    <CardMedia
                                        className={classes.cover}
                                        component="img"
                                        alt="sign"
                                        
                                        image={sign}
                                        title="sign"
                                        />
                                
                                    </Button>
                                    <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('shirt')}>
                                    <CardMedia
                                        className={classes.cover}
                                        component="img"
                                        alt="blank t-shirt"
                                        
                                        image={tshirt}
                                        title="tshirt"
                                        />
                                    
                                    </Button>
                                    <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('vehicle')}>
                                    <CardMedia
                                        className={classes.cover}
                                        component="img"
                                        alt="vehicle"
                                        
                                        image={vehicle}
                                        title="vehicle"
                                        />
                                    
                                    </Button>
                                </ButtonGroup>
                            </Grid>

                            <Grid maxWidth="lg" color="inherit" component="main" className={classes.heroContent}>
                                <ImageList rowHeight={200} cols={4} className={classes.imageList}>
                                    {!loading ? (
                                        images && images.map((image) => (

                                                <ImageListItem  key={image.id}>
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
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
        </>
    )
};

export default Offers;