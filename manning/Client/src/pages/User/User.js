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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { signOut, getAuth } from 'firebase/auth';
import useStorage from '../../hooks/useStorage';
import { CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import {DropzoneArea} from 'material-ui-dropzone';
import { db } from '../../firebase/config';
import { doc, updateDoc} from 'firebase/firestore';
const font = "'Niconne', cursive";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh'
    },
    avatar: {
        margin: theme.spacing(1),
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
}));


// const ProgressBar = ({ file, setFile }) => {
//     const [color, setColor] = useState()
//     const { url, progress } = useStorage(file);

//     const progressColor = (progress) => {
//         if (progress < 100) {
//             setColor('primary')
//         } else if (progress === 100) {
//             setColor(green[500])
//             return;
//         }
//     }

//     useEffect(() => {
//         progressColor(progress)
//         if (url) {
//             setFile(null);
//         };
//     }, [progressColor]);

//     useEffect(() => {
//         if (url) {
//             setFile(null)
//         }  
//     }, [url, setFile])
    
//     return (
//         <CircularProgress variant="determinate" style={{color: color}} value={progress} />
//     )
// }


export default function User () {
    const classes = useStyles();
    const [file, setFile] = useState();
    const [type, setType] = useState(null)
    const [error, setError] = useState('');
    const [color, setColor] = useState();
    const [aboutImage1, setAboutImage1] = useState();
    const [aboutInfo1, setAboutInfo1] = useState();
    const [aboutInfo2, setAboutInfo2] = useState();
    const [aboutImage2, setAboutImage2] = useState();
    const [galleryImages, setGalleryImages] = useState();

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
    

    // handles change of radio group buttons controlling what type of image
    const handleChange = (event) => {
        event.preventDefault();
        //  set type of image to value of radio group buttons
        setType(event.target.value);
    };

    const acceptedTypes = ['image/png', 'image/jpeg']
    

    const onSubmit = (values) => {
        // parsing about1 image to be prepped to go into storage and have the made url updated to the firestore cloud information
        if (aboutImage1) {
            console.log( 'about1 img found', aboutImage1);
            let data = aboutImage1;
            // no sure might need to hardcode with url first?
            data.list = 'about/about1/url';
            // call function to store image
            // needs the url from the useStorage Hook
        } else {
            console.log('no about1 img found')
        };
        
        // parsing about image 2 to be prepped for storage and have url updated into the firestore cloud
        if (aboutImage2) {
            console.log( 'about2 img found', aboutImage2);
            let data = aboutImage2;
            data.list = 'about/about2/url'
            // call function to store image
            // needs url from useStorage Hook
        } else {
            console.log('no about1 img found')
        };

        //  Using state (type) to add to the gallery images object, so that in storage function it can send the urls to the images to the firestore
        if (galleryImages) {
            console.log('gallery image found=>',galleryImages);
            let data = galleryImages;
            data.list = type;
            // call storage function here to send data to firebase storage
            // storage hook url needed
        } else { 
            console.log('no gallery image deteceted')
        };

        // parsing about info text 
        if (values.about1) {
            console.log('about1 value found')
            updateFirestore('about','about1', values.about1);
            // call update firestore function here?
        } else {
            console.log('about1 value NOT found')
        };
    
        if (values.about2) {
            updateFirestore('about','about2', values.about2);
            console.log('about2 value found')
            // call update firestore function here?
        } else {
            console.log('about2 value NOT found')
        };


    };

    return (
        <>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Admin 
                    </Typography>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => (
                            <form className={classes.form} onSubmit={handleSubmit} enctype="multipart/form-data" noValidate>
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
                                    <RadioGroup color="primary.main" onChange={handleChange} name="typeOrder" row>
                                        <FormControlLabel
                                            label="Shirts"
                                            name="shirt"
                                            control={<Radio />}
                                            type="Radio"
                                            value="shirt"
                                        />
                                        <FormControlLabel
                                            label="Sign"
                                            name="sign"
                                            control={<Radio />}
                                            type="Radio"
                                            value="sign"
                                        />
                                        <FormControlLabel
                                            label="Vehicle Wrap"
                                            name="vehicle"
                                            control={<Radio />}
                                            type="Radio"
                                            value="vehicle"
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
                        )} />
                </div>
            </Container>
            <Footer className={classes.footer}/>
        </>
    );
}