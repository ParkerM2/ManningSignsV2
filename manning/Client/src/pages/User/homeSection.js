import React, { useState } from 'react';
import {
    Button,
    Grid,
    Typography,
    Paper,
    Divider,
    makeStyles,
    TextField,
    Card,
    CardMedia,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
} from '@material-ui/core';
import { useAuth } from '../../context/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
const font = 'Niconne';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'lightblue',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingBottom: '2vh',
        paddingTop: '2vh'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',// 16:9
    },
}))


const HomeSection = () => {
    const classes = useStyles();
    const [name, setName] = useState();
    const { currentUser, logout } = useAuth();
    const auth = getAuth();


    const changeName = (e) => {
        setName(e.target.value)
    }

    const submitChange = () => {
        if (name !== currentUser.displayName) {
            updateProfile(auth.currentUser,{
                displayName: name
            }).then(() => {
            // updated profile
            }).catch((error) => {
                console.log(error)
            })
        }
    };

    return (
        <>
           
            {/* gallery using buttons controlling state, mapping over array from backend firestore request */}
            <br></br>
            <Paper elevation={3} className={classes.container}>
                <div className={classes.root}>
                    <Typography style={{fontFamily: font, color: '#0276aa'}} variant="h3">
                     User Settings
                    </Typography>       
                </div>
                <Divider />
                <Grid style={{padding: '4vh'}}>
                    <Grid container justifyContent="space-around">
                        <Card>
                            <CardHeader 
                                avatar={
                                    <Avatar className={classes.avatar} src={currentUser.photoURL} />
                                }
                                title={`${currentUser.displayName}'s Settings`}
                                subheader={`Last Logged in: ${currentUser.metadata.lastSignInTime}`}
                            />
                            <CardMedia className={classes.media}
                                image={currentUser.photoURL}
                                title="current user image" 
                            />
                            <CardContent>
                                <form>
                                    <TextField label="Display Name:" onChange={changeName} variant="outlined" id="name" defaultValue={currentUser.displayName} />
                                    <Typography> Email :{" "} {currentUser.email} </Typography>     
                                </form>
                            </CardContent>
                            <CardActions>
                                    <Button fullWidth onClick={submitChange} style={{backgroundColor: '#0276aa'}} variant="contained">Submit Changes</Button>
                                    <Button onClick={logout} style={{backgroundColor: '#0276aa'}} variant="contained">Logout</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
            <Divider />
        </>
    )
}

export default HomeSection;