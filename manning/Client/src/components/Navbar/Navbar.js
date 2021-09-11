import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    Menu,
    MenuItem,
    Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// 
import { getAuth, onAuthStateChanged } from '@firebase/auth';
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
        background: "black",
        color: "cyan"
    }
}));
const font = "'Niconne', cursive";


const Navbar = () => {
    const [anchor, setAnchor] = useState(null);
    const classes = useStyles();
    const { currentUser, logout } = useAuth();
    let history = useHistory();

    function signOut () {
        history.push('/')
        logout();
      };

    // open small menu
    const menuClick = (event) => {
        setAnchor(event.currentTarget)
    }; 
    // close small menu
    const menuClose = (event) => {
        setAnchor(null)
    };

    return (
        <>
           
            <Grid maxwidth="100%">
            <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                    <Typography style={{ fontFamily: font }} color="inherit" variant="h6" className={classes.title} >
                            <Button style={{color: 'cyan', textDecoration: 'none'}} href="/">MS</Button>
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

