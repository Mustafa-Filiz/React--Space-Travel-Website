import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';

const useStyles = makeStyles({
    container: {
        display: 'flex !important',
        justifyContent: 'flex-end',
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
			borderBottom : "3px solid white"
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
            <AppBar className={classes.navbar} position="static">
                <Toolbar className={classes.btncontainer}>
                    <Button className={classes.btn}>
                        <Typography>00 HOME</Typography>
                    </Button>
                    <Button className={classes.btn}>
                        <Typography>01 DESTINATION</Typography>
                    </Button>
                    <Button className={classes.btn}>
                        <Typography>02 CREW</Typography>
                    </Button>
                    <Button className={classes.btn}>
                        <Typography>03 TECHNOLOGY</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
