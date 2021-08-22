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
        marginBottom: "5px"
    },
    paperImg: {
        backgroundImage: `url('https://via.placeholder.com/300/09f/fff.png')`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPostContent: {
        color: 'black',
        position: 'relative',
        padding: theme.spacing(6),
        paddingTop: theme.spacing(8),
    },
}));

const font = "'Niconne', cursive";

// take in props for about text??

const HeroSection = () => {
    const classes = useStyles();
    return (
        <>
            <div>
                <Paper className={classes.box}>
                        <Grid item md={12}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography variant="h3" style={{ fontFamily: font }} gutterBottom>
                                    Manning Signs <b>family</b> owned and operated
                                </Typography>
                            </div>
                        </Grid>
                    {/* Amy / Dale descriptions and pictures w/ links to socials */}
                    <Grid container margin="auto" direction="row" justify="space-around" alignItems="center" md={12}>
                        <Grid item md={5}>
                            <Typography variant="h6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <CardMedia src="https://via.placeholder.com/150/09f/fff.png" component="img">
                            </CardMedia>
                        </Grid>
                    </Grid>
                    <Grid container margin="auto" direction="row" justify="space-around" alignItems="center" spacing={2} md={12}>
                        <Grid item md={2}>
                            <CardMedia src="https://via.placeholder.com/150/09f/fff.png" component="img">
                            </CardMedia>
                        </Grid>
                        <Grid item md={5}>
                            <Typography variant="h6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    )
};

export default HeroSection;