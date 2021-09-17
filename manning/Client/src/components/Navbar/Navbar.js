import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    Grid,
} from '@material-ui/core';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

// import { Link as LinkS } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    navBar: {
        background: "#0276aa",
        color: "lightblue"
    }
}));
const font = "Niconne";


const Navbar = () => {
    const classes = useStyles();
    const { currentUser, logout } = useAuth();
    let history = useHistory();

    function signOut () {
        history.push('/')
        logout();
      };

    return (
        <>
           
            <Grid maxwidth="100%">
            <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                    <Typography color="inherit" className={classes.title} >
                            <Button style={{color: 'lightblue', fontFamily: font}} href="/">Home</Button>
                    </Typography>
                        <Button style={{ fontFamily: font }} color="inherit"
                            href={currentUser ? '/user/administrator' : '/login'}>
                            {currentUser ? `Welcome, ${currentUser.displayName} !`  : 'Login'}
                        </Button>
                        {currentUser ? 
                            <Button style={{ fontFamily: font }} color="inherit" onClick={signOut}>
                            Logout
                            </Button>
                            :
                            null
                        }
                </Toolbar>
            </AppBar>
            </Grid>
            
        </>
    )
};

export default Navbar;

