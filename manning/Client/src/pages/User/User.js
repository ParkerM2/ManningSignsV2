import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import {
    Avatar,
    Button,
    CssBaseline,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Grid,
    Radio,
    Typography,
    Container,
    Divider,
    Input,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Breadcrumbs,
    Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import useStorage from '../../hooks/useStorage';
import { CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import {DropzoneArea} from 'material-ui-dropzone';
import { db } from '../../firebase/config';
import { doc, updateDoc} from 'firebase/firestore';
import AboutSection from './aboutSection';
import GallerySection from './gallerySection';
import HomeSection from './homeSection';

const font = "'Niconne', cursive";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(6),
        minHeight: '100vh'
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    footer: {
        marginTop: 'auto',
    },
    input: {
        paddingTop: '2vh',
        paddingBottom: '2vh',
    },
    toolbar: {
        paddingTop: '15vh'
    },
    topBackground: {
        display:'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.grey[600],

    },
    headerContent: {
        display: 'flex',
        justifyContent: 'center',
    }

}));


export default function User () {
    const classes = useStyles();
    const [section, setSection] = useState('home');

    // update Doc function
    async function updateFirestore(reference, field, payload) {
        const ref = doc(db, 'gallery', reference)
        if (field === 'about1') {
            await updateDoc(ref, 
                {
                    'about1.text': payload
                }
            )
        } else if (field === 'about2') {
            await updateDoc(ref,
                {
                    'about2.text' : payload
                }
            )
        } else {
            
        }
    };

    const handleCurrentSection = (section) => {
        if (section === 'home') {
            console.log(section)
            return <HomeSection />
        } else if (section === 'about') {
            console.log(section)
            return <AboutSection />
        } else if (section === 'gallery') {
            console.log(section)
            return <GallerySection />
        } else {

        }
    };

 

    return (
        <>
            <div className={classes.paper}>
                <Container>
                    <Paper elevation={3} className={classes.topBackground}>
                        <Grid container>
                            <Grid align="center" item lg={12} md={12} sm={12}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography align="center" component="h1" variant="h5">
                                    Admin 
                                </Typography>
                                <Grid className={classes.headerContent}>
                                <Breadcrumbs>
                                    <Button onClick={() => setSection('home')} style={{fontFamily: font}}>
                                        Home Page
                                    </Button>
                                    <Button onClick={() => setSection('about')} style={{fontFamily: font}}>
                                        About Info
                                    </Button>
                                    <Button onClick={() => setSection('gallery')} style={{fontFamily: font}}>
                                        Gallery Info
                                    </Button>
                                </Breadcrumbs>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Paper>
                        <Divider variant="middle"/>
                        {handleCurrentSection(section)}
                </Container>
            </div>
            {/* based on state of button click return Home, About section, Gallery Info */}
        </>
    );
}


{/*  
                            <form className={classes.form} onSubmit={handleSubmit} enctype="multipart/form-data" >
                                <Typography variant="h4" style={{fontFamily: font}}>About Section Settings</Typography>
                                <Field
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="about1"
                                    label="About Section 1"
                                    name="about1"
                                    multiline
                                    rows={4}
                                    autoFocus
                                    onChange={setAboutInfo1}
                                    component={TextField}

                                ></Field>
                                <Grid container style={{padding: '2vh'}}>
                                    <DropzoneArea 
                                        filesLimit={1}
                                        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                        maxFileSize={5000000}
                                        onChange={setAboutImage1}
                                    />
                                </Grid>
                                <Divider className={classes.divider}/>
                                <Field
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="about2"
                                    label="About Section 2"
                                    type="text"
                                    multiline
                                    rows={4}
                                    id="about2"
                                    onChange={setAboutInfo2}
                                    component={TextField}

                                />
                                <Grid container style={{padding: '2vh'}}>
                                    <DropzoneArea 
                                        filesLimit={1}
                                        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                        maxFileSize={5000000}
                                        onChange={setAboutImage2}
                                    />
                                </Grid>
                                <Divider className={classes.divider} />
                                <Typography variant='h4' style={{ fontFamily: font, paddingTop : "2vh", paddingBottom: '2vh' }}>
                                    Gallery Images
                                </Typography>
                                <Grid item sm={12}>
                                    <FormLabel style={{ fontFamily: font }} component="legend" color="primary">What type of <strong>Image</strong> are you uploading?</FormLabel>
                                    <RadioGroup required color="primary.main" onChange={handleChange} name="typeOrder" row>
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
                                </Grid>
                                <Grid container lg={12} style={{padding: '2vh'}} >
                                <DropzoneArea 
                                    filesLimit={4}
                                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                                    maxFileSize={5000000}
                                    onChange={setGalleryImages}
                                />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Submit
                                </Button>
                            </form>
                        )} /> */}

                        // const acceptedTypes = ['image/png', 'image/jpeg']
    
                        // setup clear function to set states back to null
                    
                        // const onSubmit = (values) => {
                    
                        // //     // parsing about1 image to be prepped to go into storage and have the made url updated to the firestore cloud information
                        //     if (aboutImage1.length > 0) {
                        //         let data = aboutImage1[0];
                        //         // no sure might need to hardcode with url first?
                        //         data.list = 'about1'
                        //         data.field = 'about1.url';
                        //         // call function to store image
                        //         // needs the url from the useStorage Hook
                                
                        //         console.log(data, 'img1')
                        //     } else {
                        //         console.log('no about1 img found')
                        //     };
                            
                        //     // parsing about image 2 to be prepped for storage and have url updated into the firestore cloud
                        //        if (aboutImage2.length > 0) {
                        //         let data = aboutImage2[0];
                        //         data.list = 'about2';
                        //         data.field = 'about2.url';
                        //         // call function to store image
                        //         // needs url from useStorage Hook
                    
                               
                        //         console.log(data, 'img2')
                        //     } else {
                        //         console.log('no about2 img found')
                        //     };
                    
                        //     //  Using state (type) to add to the gallery images object, so that in storage function it can send the urls to the images to the firestore
                        //     if (galleryImages.length > 0) {
                        //         let img = [];
                        //         // loops through array of staged image files
                        //         // for each img file attach on the type and field(path for url to be sent to firebase server)
                        //         for (let i = 0; i < galleryImages.length; i++) {
                        //         let data = galleryImages[i];
                        //         data.list = type;
                        //         data.field = `${type}[${i}]`;
                        //         data.id = i;
                        //         // call storage function here to send data to firebase storage
                        //         // storage hook url needed
                        //         img.push(data)
                        //         };
                        //         console.log(img, 'gallery images array')
                        //     } else { 
                        //         console.log('no gallery image deteceted')
                        //         console.log(galleryImages)
                        //     };
                    
                        //     // parsing about info text 
                        //     if (values.about1) {
                        //         updateFirestore('about','about1', values.about1);
                        //         // call update firestore function here?
                        //     } else {
                        //         console.log('about1 value NOT found')
                        //     };
                        
                        //     if (values.about2) {
                        //         updateFirestore('about','about2', values.about2);
                        //         // call update firestore function here?
                        //     } else {
                        //         console.log('about2 value NOT found')
                        //     };
                    
                    
                        // };