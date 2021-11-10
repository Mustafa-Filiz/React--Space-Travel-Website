import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { Button, IconButton, Typography } from '@mui/material';
import logo from '../images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex !important',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    line: {
        width: '30%',
        height: 2,
        backgroundColor: '#fff',
        opacity: 0.5,
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    },
    menu: {
        marginRight: '20px !important',
        [theme.breakpoints.up('md')]: {
            display: 'none !important',
        },
    },
    icon: {
        color: '#D0D6F9',
    },
    navbar: {
        width: '55% !important',
        height: 96,
        backgroundColor: 'rgba(255, 255, 255, 0.04) !important;',
        backdropFilter: 'blur(81.5485px)',
        [theme.breakpoints.down('lg')]: {
            width: '70% !important',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none !important',
        },
    },
    btncontainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        width: "100%",
        height: 96,
        borderRadius: '0 !important',
        color: 'white !important',
        boxSizing: 'border-box',
        fontFamily: 'Barlow Condensed !important',
    },
    active: {
        borderBottom: '3px solid white',
        '&hover' : {
            borderBottom: '3px solid white', 
        }
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <Box className={classes.container} sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" style={{ height: 48, marginLeft: 40 }} />
            <Box className={classes.line} />
            <IconButton size="large" className={classes.menu}>
                <MenuIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <AppBar className={classes.navbar} position="static">
                <Toolbar className={classes.btncontainer}>
                    <NavLink exact activeClassName={classes.active} to="/">
                        <Button className={classes.btn}>
                            <Typography variant="h6">00 HOME</Typography>
                        </Button>
                    </NavLink>
                    <NavLink activeClassName={classes.active} to="/destination">
                        <Button className={classes.btn}>
                            <Typography variant="h6">01 DESTINATION</Typography>
                        </Button>
                    </NavLink>
                    <NavLink activeClassName={classes.active} to="/crew">
                        <Button className={classes.btn}>
                            <Typography variant="h6">02 CREW</Typography>
                        </Button>
                    </NavLink>
                    <NavLink activeClassName={classes.active} to="/technology">
                        <Button className={classes.btn}>
                            <Typography variant="h6">03 TECHNOLOGY</Typography>
                        </Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
