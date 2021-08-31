import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import api from '../../utils/API';
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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { DropzoneArea } from 'material-ui-dropzone';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Select, } from 'final-form-material-ui';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '70vh'
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
        marginBottom: '-60px'
  }
}));

// api call to get About info
const getAboutInfo = () => {
    api.getAbout().then((res) => {
        console.log('aboutInfo', res.data[0])
    }).catch(err => {
        console.log('aboutInfo error', err)
    })
}

    
export default function User (props) {
    const classes = useStyles();
    const [file, setFile] = useState();
    const [type, setType] = useState()
    const [aboutSectionImage, setAboutSectionImage] = useState(false);
    const { user, isLoggedIn, font } = props;

    // handles change of radio group buttons controlling what type of image
    const handleChange = (event) => {
        event.preventDefault();
        //  set type of image to value of radio group buttons
        setType(event.target.value);
        // parse img based on type to allow 1 or multiple images uploaded
        if (type === 'aboutOneImage' || 'aboutTwoImage') {
            setAboutSectionImage(true)
        } else {
            setAboutSectionImage(false)
        }
        console.log(type)
    };

    // handles click or drag of image into dropzone
    // sets state of file to hold img path(s)
    const handleUploadClick = (event) => {
    // sets state of File to array of added images paths
    let imgArray = [];
    event.map((img) => {
        imgArray.push(img.path)
    }); 
    setFile(imgArray)
    }

    // handles submitting the form
    // parse out values of form inputs
    // call the backend function to send data to db
    const onSubmit = (values) => {
        console.log(values)

        let aboutInfo = {
            about1: values.about1,
            about2: values.about2
        }
        
        // let data = {
        //     img: values
        //     pictureType: type,

        //     imageURL: file,
        // }
        // update about1/2 fields
        // add to 

        // console.log(data, "onsubmit")
    };

    return (
        <>
    <Navbar user={user} isLoggedIn={isLoggedIn}/>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Button onClick={() => getAboutInfo()}>About Info</Button>
        <Typography component="h1" variant="h5">
          User Settings
        </Typography>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
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
                        component={TextField}

                    ></Field>
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
                        component={TextField}

                    />
                    <Typography style={{ fontFamily: font }}>
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
                            <FormControlLabel
                                label="About1"
                                name="AboutOneImage"
                                control={<Radio />}
                                type="Radio"
                                value="AboutOneImage"
                            />
                            <FormControlLabel
                                label="About2"
                                name="AboutTwoImage"
                                control={<Radio />}
                                type="Radio"
                                value="aboutTwoImage"
                            />
                        </RadioGroup>
                    </Grid>
                    <DropzoneArea
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        type="file"
                        value="image"
                        onChange={handleUploadClick}
                        name="image"
                        maxFileSize={500000000}
                        filesLimit={aboutSectionImage ? 1 : 4}
                    />
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
            )}/>
      </div>
    </Container>
    <Footer className={classes.footer} />
    </>
  );
}