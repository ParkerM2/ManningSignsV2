import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Typography,
    Container,
    Divider,
    Breadcrumbs,
    Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AboutSection from './aboutSection';
import GallerySection from './gallerySection';
import HomeSection from './homeSection';

const font = "'Niconne', cursive";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#0276aa',
        position: 'relative',
        backgroundSize: 'cover',
        minHeight: '100vh',
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
    },
    topBackground: {
        display:'flex',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'center',
        color: 'cyan',
    }

}));


export default function User () {
    const classes = useStyles();
    const [section, setSection] = useState('home');


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
        <CssBaseline/>
            <Grid className={classes.root}>
                <br></br>
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
            </Grid>
        </>
    );
}


