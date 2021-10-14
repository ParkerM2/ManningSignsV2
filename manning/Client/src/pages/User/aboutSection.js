import React, {useEffect, useState} from 'react';
import {
    Container,
    Grid,
    Typography,
    Paper,
    Divider,
    makeStyles,
    CircularProgress,
    TextField,
    Button,
    CardMedia,
} from '@material-ui/core';
import { ProgressAbout1Img, ProgressAbout2Img } from '../../components/Progress/ProgressAbout';
import { db } from '../../firebase/config';
import { getDoc, doc, updateDoc } from '@firebase/firestore';
import { DropzoneArea } from 'material-ui-dropzone';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'lightblue',
        minHeight: '100vh',
        color: '#0276aa',
    },
    title: {
        padding: '4vh',
        },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    aboutImage: {
        height: 150,
        width: 150,
        padding: '4vh',
        },
    divider: {
        padding: '4vh'
    },
    formContainer:{
        padding: '4vh',
        alignContent: 'center'
    }, 
}))

const AboutSection = () => {
    const classes = useStyles();
    const [currentAboutInfo, setCurrentAboutInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [about1Text, setAbout1Text] = useState();
    const [about2Text, setAbout2Text] = useState();
    const [newImage1, setNewImage1] = useState(null);
    const [newImage2, setNewImage2] = useState(null);
    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const [about1Title, setAbout1Title] = useState();
    const [about2Title, setAbout2Title] = useState();
    const galleryRef = doc(db, 'gallery', `about`);
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
    

    const sendNewImage1 = () => {
        let data = newImage1[0]
        data.id = 1;
        setFile1(data)
    }

    const sendNewImage2 = () => {
        let data = newImage2[0];
        data.id = 2
        setFile2(data)
    }

    const sendNewText1 =() => {
        updateDoc(galleryRef, 
            {'about1.text': about1Text,},
            {merge: true}
        );
        
    }

    const sendNewText2 =() => {
        updateDoc(galleryRef, 
            {'about2.text': about2Text},
            {merge: true}
        );
    }
    
    const sendNewTitle1 = () => {
        updateDoc(galleryRef,
            {'about1.title': about1Title},
            {merge: true}
        );
    };

    const sendNewTitle2 = () => {
        updateDoc(galleryRef,
            {'about2.title': about2Title},
            {merge: true}
        );
    };


    return (
        <>
           
            {/* gallery using buttons controlling state, mapping over array from backend firestore request */}
            <br></br>
            <Paper elevation={3} className={classes.container}>
                <Grid container>
                    <Typography item className={classes.title} variant="h4">
                        Current About Section
                    </Typography>
                </Grid>
                    <Grid item className={classes.divider}>
                        <Divider />
                    </Grid>
                    <Grid container lg={12} className={classes.formContainer} spacing={6}>
                        {!loading ? 
                            <>
                                <Grid item lg={6} md={6}>
                                    <TextField fullWidth style={{paddingBottom: '2vh'}} label='Title' onChange={(event) => {setAbout1Title(event.target.value)}} variant="outlined" defaultValue={currentAboutInfo.about1.title} />
                                    <Button type="submit" fullWidth onClick={sendNewTitle1}> Update Title </Button>

                                    <TextField fullWidth label="About section text 1" multiline="true" onChange={(event) => {setAbout1Text(event.target.value)}} variant="outlined" id="about1Text" defaultValue={currentAboutInfo.about1.text} />
                                    <Button type="submit" fullWidth onClick={sendNewText1}> Update Text </Button>
                                </Grid>

                                <Grid className={classes.centerMeDaddy} item lg={3} md={3}>
                                    <Typography variant="h6" style={{paddingBottom: '2vh'}}> About Section 1 Image </Typography>
                                    <CardMedia className={classes.aboutImage} image={currentAboutInfo.about1.url} alt={currentAboutInfo.about1.alt}/>
                                </Grid>

                                <Grid item lg={3} md={3}>
                                    <DropzoneArea  acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']} maxFileSize={5000000} filesLimit={1} onChange={setNewImage1} />
                                    <Button type="submit" fullWidth onClick={sendNewImage1}> Update </Button>
                                    {file1 && <ProgressAbout1Img file1={file1} setFile1={setFile1} />}
                                </Grid>

                                <Grid item lg={6} md={6}>
                                    <TextField style={{paddingBottom: '2vh'}} fullWidth label='Title' onChange={(event) => {setAbout2Title(event.target.value)}} variant="outlined" defaultValue={currentAboutInfo.about2.title} />
                                    <Button type="submit" fullWidth onClick={sendNewTitle2}> Update Title </Button>

                                    <TextField fullWidth label="About section text 2" multiline="true" onChange={(event) => {setAbout2Text(event.target.value)}} variant="outlined" id="about2Text" defaultValue={currentAboutInfo.about2.text} />
                                    <Button type="submit" fullWidth onClick={sendNewText2}> Update Text </Button>
                                </Grid>

                                <Grid item lg={3} md={3}>
                                    <Typography variant="h6" style={{paddingBottom: '2vh'}}> About Section 2 Image </Typography>
                                    <CardMedia className={classes.aboutImage} image={currentAboutInfo.about2.url} alt={currentAboutInfo.about2.alt}/>
                                </Grid>

                                <Grid item lg={3} md={3}>
                                    <DropzoneArea filesLimit={1} onChange={setNewImage2}/>
                                    <Button fullWidth type="submit" onClick={sendNewImage2}> Update </Button>
                                    {file2 && <ProgressAbout2Img file2={file2} setFile2={setFile2} />}
                                </Grid>
                            </>
                            : 
                            <Grid>
                                <Container>
                                    <CircularProgress color="secondary" />
                                </Container>
                            </Grid> 
                        }
                </Grid>  
            </Paper>
        </>
    )
}

export default AboutSection;