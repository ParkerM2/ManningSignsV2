import React, { useState } from 'react';
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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import ProgressBar from '../../components/Progressbar/ProgressBar';
import { signOut, getAuth } from 'firebase/auth';

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
const auth = getAuth();


    
export default function User (props) {
    const classes = useStyles();
    const [file, setFile] = useState();
    const [type, setType] = useState(null)
    const [aboutSectionImage, setAboutSectionImage] = useState(false);
    const [error, setError] = useState('');
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
    };

    const acceptedTypes = ['image/png', 'image/jpeg']

    // file upload & dropzone
    const handleUploadClick = (event) => {
        
        let selected = event.target.files[0];
        selected.list = type;
        // console.log(`Inside handleUploadclick for image => type = ${type}`)

        if (selected && acceptedTypes.includes(selected.type)) {
            console.log(selected)
            setFile(selected)
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        };
    }

    const onSubmit = (values) => {
       
        values.img_type = type;
        // console.log(file)
        // console.log(values);
        // imgUpload(file)
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        User Settings
                    </Typography>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => (
                            <form className={classes.form} onSubmit={handleSubmit} enctype="multipart/form-data" noValidate>
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
                                <Grid container lg={12} >
                                <input
                                    className={classes.input}
                                    type="file"
                                    onChange={handleUploadClick}
                                    name="image"
                                    filesLimit={aboutSectionImage ? 1 : 4}
                                />
                                    <Grid>
                                    {error && <div className="error"> {error} </div>}
                                    {file && <ProgressBar file={file} setFile={setFile} /> }
                                    </Grid>
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
            <Footer className={classes.footer} />
        </>
    );
}