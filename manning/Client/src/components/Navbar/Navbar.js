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
import { Link as LinkR } from 'react-router-dom';
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
            <Grid maxwidth="100%">
            <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                    <Typography style={{ fontFamily: font }} color="inherit" variant="h6" className={classes.title} >
                            <Button component={LinkR} style={{color: 'cyan', textDecoration: 'none'}} to="/">MS</Button>
                    </Typography>
                    <Button style={{fontFamily: font}} color="inherit" component={LinkR} to={isLoggedIn ? `/user/${user.userID}` : "/login"}>{isLoggedIn ? `Welcome, ${user.username} !` : "Login"}</Button>
                    <Button style={{fontFamily: font}} color="inherit" aria-controls="simple-menu" onClick={menuClick}>
                        <MenuIcon />
                    </Button>
                    <Menu id="simple-menu" style={{fontFamily: font}} anchorEl={anchor} keepMounted open={Boolean(anchor)} onClose={menuClose}>
                        <MenuItem style={{fontFamily: font}} onClick={menuClose}>About</MenuItem>
                        <MenuItem style={{fontFamily: font}} onClick={menuClose}>Services</MenuItem>
                        <MenuItem style={{fontFamily: font}} component={LinkR} onClick={menuClose} to={isLoggedIn ? "/logout" : `/user/${user.userID}`}>{isLoggedIn ? "Logout" : "Login"}</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            </Grid>
        </>
    )
};

export default Navbar;
