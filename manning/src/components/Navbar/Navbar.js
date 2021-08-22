import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    makeStyles,
    Menu,
    MenuItem,
    Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

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


const Navbar = ({isLoggedIn, user}) => {
    const [anchor, setAnchor] = useState(null);
    const classes = useStyles();

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
            <Grid maxWidth="100%">
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <Typography component={LinkS} to="start" variant="h6" className={classes.title} >
                        MS
                    </Typography>
                    <Button color="inherit" component={LinkR} to={isLoggedIn ? `/user/${user.userID}` : "/login"}>{isLoggedIn ? `Welcome, ${user.username} !` : "Login"}</Button>
                    <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={menuClick}>
                        <MenuIcon />
                    </Button>
                    <Menu id="simple-menu" anchorEl={anchor} keepMounted open={Boolean(anchor)} onClose={menuClose}>
                        <MenuItem component={LinkS} onClick={menuClose}>About</MenuItem>
                        <MenuItem component={LinkS} onClick={menuClose}>Services</MenuItem>
                        <MenuItem component={LinkR} onClick={menuClose} to={isLoggedIn ? "/logout" : `/user/${user.userID}`}>{isLoggedIn ? "Logout" : "Login"}</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            </Grid>
        </>
    )
};

export default Navbar;

