import React, {useEffect, useState} from 'react';
import { Link as LinkS } from 'react-scroll';
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

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'black',
        color: 'white',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '95vh',
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
        color: 'cyan',
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

const font = "'Niconne', cursive";


const Offers = ({ images }) => {
    console.log(images)
    const classes = useStyles();
    const [activeImages, setActiveImages] = useState([]);

    const { shirt, vehicle, sign } = images;

    useEffect(() => {
        setActiveImages(shirt)
    }, [shirt])

    return (
        <>
            <div className={classes.hero}>
                <Paper className={classes.box}>
                        <Grid item md={12}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography  variant="h3" style={{ fontFamily: font }} >
                                    We offer a wide variety of <b>Sign</b> and <b>Shirt</b> solutions!
                                </Typography>
                            </div>
                        </Grid>
                    {/* gallery using buttons controlling state, mapping over array from backend axios request */}
                    <Grid className={classes.buttons}>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button variant="outlined" color="inherit" onClick={() => setActiveImages(shirt)}>Shirts</Button>
                        <Button variant="outlined" color="inherit" onClick={() => setActiveImages(vehicle)}>Vehicles</Button>
                        <Button variant="outlined" color="inherit" onClick={() => setActiveImages(sign)}>Signs</Button>
                    </ButtonGroup>
                    </Grid>
                    <Container maxWidth="lg" color="inherit" component="main" className={classes.heroContent}>
                        <Grid container spacing={5} alignItems="flex-end">
                                {activeImages.map((image) => (
                                    <Grid style={{padding: '4vh'}} item key={image.title} xs={12} md={4}>
                                        <Card className={classes.root}>
                                            <CardMedia
                                                component="img"
                                                alt={image.title}
                                                height="300"
                                                src={image.url}
                                                title={image.title}
                                            />
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                    </Container>
                </Paper>
            </div>
        </>
    )
};

export default Offers;