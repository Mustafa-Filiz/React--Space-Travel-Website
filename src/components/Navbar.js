import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import logo from "../images/logo.svg"

const useStyles = makeStyles({
    container: {
        display: 'flex !important',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    line:{
        width: "30%",
        height: 2,
        backgroundColor : "#fff",
        opacity: 0.5,
    },
    navbar: {
        width: '55% !important',
        height: 96,
        backgroundColor: 'rgba(255, 255, 255, 0.04) !important;',
        backdropFilter: 'blur(81.5485px)',
    },
    btncontainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        width: '23%',
        height: 96,
        borderRadius: "0 !important",
        color: 'white !important',
		boxSizing : "border-box",

		"&:hover" : {
			borderBottom : "3px solid white",
            backgroundColor : "transparent !important"
		},
		"&:focus" : {
			borderBottom : "3px solid white"
		},
    },
});

export default function Navbar() {
    const classes = useStyles();

    return (
        <Box className={classes.container} sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" style={{ height : 48, marginLeft : 40}} />
            <Box className={classes.line} />
            <AppBar className={classes.navbar} position="static">
                <Toolbar className={classes.btncontainer}>
                    <Button className={classes.btn}>
                        <Typography variant="h6">00 HOME</Typography>
                    </Button>
                    <Button className={classes.btn}>
                        <Typography variant="h6">01 DESTINATION</Typography>
                    </Button>
                    <Button className={classes.btn}>
                        <Typography variant="h6">02 CREW</Typography>
                    </Button>
                    <Button className={classes.btn}>
                        <Typography variant="h6">03 TECHNOLOGY</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
