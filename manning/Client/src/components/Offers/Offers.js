import React, { useState, useEffect, useRef} from 'react';
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
    ImageList,
    ImageListItem,
    Box,
    ImageListItemBar,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import tshirt from '../Quote/quoteforms/tshirt1.png';
import vehicle from '../Quote/quoteforms/vehicle.png';
import sign from '../Quote/quoteforms/sign.png';
import Modal from '../modal/modal';
const font = "'Niconne', cursive";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const useStyles = makeStyles((theme) => ({
    box: {
        minHeight: '80vh',
        padding: '4vh',
        color: '#0276aa'
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
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cover: {
        maxWidth: 200,
        minHeight: 100,
    },
    scrollingWrapper: {
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        maxWidth: 800,
        minWidth: 100,
        maxHeight: 500
    },
    imgCard: {
        display: 'inline-block',
        paddingRight: '1vh',
        paddingLeft: '1vh'
    },
    paper: {
    }
}));


const Offers = () => {
    const classes = useStyles();
    const serviceRef = useRef();
    // currentImages sets the collection to pull from in the gallery db
    const [currentImages, setCurrentImages] = useState('shirt');
    const [images, setImages] = useState();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


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
            
                            <Grid item md={12} lg={12} sm={12} xs={12} className={classes.mainFeaturedPostContent}>
                                <Container>
                                    <Typography align="center" variant="h5" style={{ fontFamily: font }} >
                                        We offer a wide variety of <b>Sign</b> and <b>Shirt</b> solutions!
                                    </Typography>
                                </Container>
                            </Grid>
                        
                            <Grid item xs={12} lg={12} md={12} sm={12} className={classes.buttons}>
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
                            </Grid>
                
                                
                                {/* <Paper elevation={3} style={{padding: '2vh', background: 'linear-gradient(to right bottom, #4dabf5, #0e4686)',}}> */}
                                <Grid item className={classes.scrollingWrapper}>
                                    {!loading ? (
                                        images && images.map((image) => (
                                            
                                            <div className={classes.imgCard}>
                                            <img
                                              srcSet={`${image.url}`}
                                              src={`${image.url}`}
                                              alt={image.title}
                                              loading="lazy"
                                            />
                                            </div>
                                                
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
                                {/* </Paper> */}
                            </Grid>
                            
                
                
        </>
    )
};

export default Offers; 