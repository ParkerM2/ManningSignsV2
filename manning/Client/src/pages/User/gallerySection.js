import React, {useEffect, useState} from 'react';
import {
    Grid,
    Button,
    Card,
    FormControl,
    CircularProgress,
    ButtonGroup,
    ImageList,
    ImageListItem,
    Paper,
    Divider,
    Radio,
    RadioGroup,
    FormLabel,
    FormControlLabel,
} from '@material-ui/core';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { makeStyles } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import Progress from '../../components/Progress/ProgressGallery';
const font = "'Niconne', cursive";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
        backgroundColor: 'lightblue'
    },
    container: {
        backgroundColor: 'lightblue',
        color: '#0276aa'
    },
}))


const GallerySection = () => {
    const classes = useStyles();
    const [currentImages, setCurrentImages] = useState('shirt');
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState();
    const [value, setValue] = useState();
    const [file, setFile] = useState(null);
    
    
    
    // grab images from firebase 
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
    },[])


    // radio group controller
    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value)
    };

    const submit = (e) =>{
        e.preventDefault();
         if (value && images) {
             console.log('top of if')
             console.log(value , images )
             if (images) {
                // loops through array of staged image files
                // for each img file attach on the type and field(path for url to be sent to firebase server)
                    let data = images[0];
                    data.list = value;
                   
                    setFile(data);
            };
                console.log(images)
            } else { 
                console.log('no gallery image deteceted')
                console.log(images)
            };
    };

    

    return (
        <>
           
            {/* gallery using buttons controlling state, mapping over array from backend firestore request */}
            <br></br>
            <Paper elevation={3} className={classes.container}>
                <div className={classes.root}>
                    <Grid container lg={12} spacing={6} alignContent="center">
                        <Grid item lg={6}>
                            <FormControl component="fieldset">
                                <FormLabel style={{ fontFamily: font }} component="legend" color="primary">What type of <strong>Image</strong> are you uploading?</FormLabel>
                                    <RadioGroup required color="primary.main" value={value} onChange={handleChange} name="typeOrder" row>
                                        <FormControlLabel
                                            label="Shirts"
                                            name="shirt"
                                            control={<Radio />}
                                            type="Radio"
                                            value="shirt"
                                            required
                                        />
                                        <FormControlLabel
                                            label="Sign"
                                            name="sign"
                                            control={<Radio />}
                                            type="Radio"
                                            value="sign"
                                            required
                                        />
                                        <FormControlLabel
                                            label="Vehicle Wrap"
                                            name="vehicle"
                                            control={<Radio />}
                                            type="Radio"
                                            value="vehicle"
                                            required
                                        />
                                    </RadioGroup>
                            </FormControl>
                            <DropzoneArea
                                filesLimit={1}
                                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                maxFileSize={5000000}
                                onChange={setImages}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={submit}
                                className={classes.submit}
                            >
                                Submit
                            </Button>
                            {file && <Progress file={file} setFile={setFile} />}
                        </Grid>
                        <Grid item>
                            <ButtonGroup style={{padding: '1vh'}} size="small" aria-label="small outlined button group">
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
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            <Divider />
        </>
    )
}

export default GallerySection;