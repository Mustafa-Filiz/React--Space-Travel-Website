import { AppBar, Button, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../images/logo.svg';

const useStyles = makeStyles({
    Navbar: {
        position: 'relative',
        marginTop: 40,
        backgroundColor: 'transparent',
    },
    toolbar: {
        position: 'absolute',
        width: 1385,
        height: 96,
        left: 55,
    },
    line: {
        position: 'absolute',
        width: 473,
        height: 1,
        left: 112,
        top: 48,
        background: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: 0.25,
    },
    btnContainer: {
        position: 'absolute',
        width: 840,
        height: 96,
        left: 545,
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(81.5485px)',
    },
    btn: {
        fontFamily: 'Barlow Condensed',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 2.7,
    },
});

function NavBar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.Navbar}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="logo" />
                <Box className={classes.line} />
                <Box className={classes.btnContainer}>
                    <Button className={classes.btn}>00 Home</Button>
                    <Button>01 Destination</Button>
                    <Button>02 Crew</Button>
                    <Button>03 Technology</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
