import React, {useEffect, useState} from 'react';
import {
    Container,
    Grid,
    Typography,
    Button,
    Card,
    CardMedia,
    CircularProgress,
    ButtonGroup,
    ImageList,
    ImageListItem,
    Divider
} from '@material-ui/core';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: '4vh'
    },
    imageList: {
        width: 500,
        height: 400,
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'center',
    },
    header: {
        padding: '4vh',
        backgroundColor: 'grey'
    }

}))


const GallerySection = () => {
    const classes = useStyles();
    const [currentImages, setCurrentImages] = useState('shirt');
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState();

    
    // docs is the response from firestore db where the objects containing the image info are stored
    const getData = async () => {
        const docRef = doc(db, 'gallery', currentImages);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            console.log('document data' , docSnap.data().images)
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
           
            {/* gallery using buttons controlling state, mapping over array from backend firestore request */}
            <Container>
                <div className={classes.root}>
                <Typography variant="h4">
                        Current Gallery Section
                    </Typography>
                    <ButtonGroup size="small" orientation="vertical" aria-label="small outlined button group">
                        <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('shirt')}>Shirts</Button>
                        <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('vehicle')}>Vehicles</Button>
                        <Button variant="outlined" color="inherit" onClick={() => setCurrentImages('sign')}>Signs</Button>
                    </ButtonGroup>
                            <ImageList rowHeight={160} cols={3} className={classes.imageList}>
                                {!loading ? (
                                    images && images.map((image) => (
                                            <ImageListItem key={image.id} cols={1}>
                                                <img src={image.url} alt={image.title} />
                                            </ImageListItem>
                                ))) 
                                : 
                                (   
                                    <Grid style={{ padding: '4vh' }} item xs={12} md={4}>
                                        <Card>
                                            <CircularProgress color="secondary" />
                                        </Card>
                                    </Grid>
                                )}
                            </ImageList>
                        </div>
                    </Container>

                    <Divider />
        </>
    )
}

export default GallerySection;