import React from 'react';

import { Link as LinkS } from 'react-scroll';
import {
    Typography,
    makeStyles,
    CardMedia,
    Grid,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'white',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '95vh',
    },
    paperImg: {
        backgroundImage: `url('https://via.placeholder.com/300/09f/fff.png')`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'fit-to-size',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        color: 'black',
        position: 'relative',
        padding: theme.spacing(7),
        paddingTop: theme.spacing(12),
    },
    hero: {
        flexGrow: 1,
    }
}));

const font = "'Niconne', cursive";

// take in props for about text??

const HeroSection = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.hero}>
                <Paper className={classes.box}>
                    <Grid container spacing={2}>
                        <Grid item md={5}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography variant="h3" style={{ fontFamily: font }} gutterBottom>
                                    Manning Signs <b>family</b> owned and operated
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    {/* Amy / Dale descriptions and pictures w/ links to socials */}
                    <Grid container margin="auto" direction="row" justify="space-around" alignItems="center" spacing={2} md={12}>
                        <Grid item md={4}>
                            <Typography variant="h6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <CardMedia src="https://via.placeholder.com/150/09f/fff.png" component="img">
                            </CardMedia>
                        </Grid>
                    </Grid>
                    <Grid container margin="auto" direction="row" justify="space-around" alignItems="center" spacing={2} md={12}>
                        <Grid item md={4}>
                            <Typography variant="h6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <CardMedia src="https://via.placeholder.com/150/09f/fff.png" component="img">
                            </CardMedia>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    )
};

export default HeroSection;