import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import VideoPlayer from "react-background-video-player";
import backgroundVideo from '../../videos/lights.mp4';
import Paper from '@material-ui/core/Paper';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Manning Signs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundImage: `url(${backgroundImage})`,
    objectFit: 'cover',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '20vh',
},
    mainFeaturedPostContent: {
        color: 'white',
        position: 'relative',
        textAlign: 'center',
        paddingTop: '5vh',
    },
}));
export default function Footer() {
  const classes = useStyles();

  return (
      <Paper className={classes.footer}>
        <VideoPlayer 
            className={classes.video}
            src={backgroundVideo}
            autoPlay={true}
            muted={true}
        />
      <Container className={classes.mainFeaturedPostContent} maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
            Website Designed by{" "}
            <Link color="inherit" target="__blank" href="/https://parkermanning.netlify.app/">
            Parker Manning
            </Link>
        </Typography>
        <Copyright />
      </Container>
    </Paper>
  );
}

