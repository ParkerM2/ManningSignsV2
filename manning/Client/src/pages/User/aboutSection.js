import React, {useEffect, useState} from 'react';
import {
    Container,
    Grid,
    Typography,
    Paper,
    Divider,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.grey[300],
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    }
}))


const AboutSection = () => {
const classes = useStyles();

    return (
        <>
           
            {/* gallery using buttons controlling state, mapping over array from backend firestore request */}
            <br></br>
            <Paper elevation={3} className={classes.container}>
                <div className={classes.root}>
                <Typography variant="h4">
                    Current About Section
                </Typography>
                            
                </div>
                    </Paper>

                    <Divider />
        </>
    )
}

export default AboutSection;