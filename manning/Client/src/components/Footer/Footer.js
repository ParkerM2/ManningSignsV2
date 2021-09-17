import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import VideoPlayer from "react-background-video-player";
import backgroundVideo from '../../videos/lights.mp4';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
      <Grid>
      <Paper className={classes.footer}>
        <VideoPlayer 
            className={classes.video}
            src={backgroundVideo}
            autoPlay={true}
            muted={true}
        />
      <Container className={classes.mainFeaturedPostContent} maxWidth="lg">
        <Typography variant="h7" align="center" gutterBottom>
            Website Designed by{" "}
            <Link color="inherit" target="__blank" href="https://parkermanning.netlify.app/">
            Parker Manning
            </Link>
        </Typography>
        <Copyright />
        <Typography variant="h7" align="center" gutterBottom>
            View our location:{" "}
            <Link color="inherit" target="__blank" href="https://www.google.com/maps/dir//manningsigns+location+greenville+ms/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x862becf6f2c61895:0x23b56afddb407098?sa=X&ved=2ahUKEwiH6fK984bzAhX3lmoFHevuAoEQ9Rd6BAhPEAU">
            Here
            </Link>
        </Typography>
      </Container>
    </Paper>
    </Grid>
  );
}

