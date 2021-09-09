import React, { useState, useEffect } from 'react'
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
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    async function getUser() {
        const auth = getAuth();
        const user = auth.currentUser;
        

        if (!user) {
            setLoading(true);
            console.log('no user')
        } else {
            setUser(user);
            setLoading(false)
            console.log(user);
        }
    };

    useEffect(() => {
        setLoading(true)
        getUser();
    }, [])



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
                            href={!loading ? '/user/administrator' : '/login'}>
                            {!loading ? `Welcome, ${user.displayName} !`  : 'Login'}
                        </Button>
                        {!loading ? 
                            <Button style={{ fontFamily: font }} color="inherit"
                            href='/user/administrator'>
                            Admin Page
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

