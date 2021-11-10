import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Navbar from '../components/Navbar';
import bgImg from '../images/technology/background-technology-desktop.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        paddingTop: 40,
    },
    main: {
        width: '90%',
        height: '80vh',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        [theme.breakpoints.down("md")] : {
            flexDirection : 'column'
        },
    },
    content: {
        width: '33%',
        textAlign : "left",
        [theme.breakpoints.down("md")] : {
            width : '60%'
        },
    },
    subtitle:{
        fontSize : "1.75rem !important",
        color: "#D0D6F9",
        letterSpacing: "4.725px",
        [theme.breakpoints.down("md")] : {
            fontSize : "1.5rem !important",
        },
        [theme.breakpoints.down("sm")] : {
            fontSize : "1rem !important",
        },
    },
    title:{
        fontSize : "9.4rem !important",
        fontFamily : "Bellefair !important",
        [theme.breakpoints.down("lg")] : {
            fontSize : "8rem !important",
        },
        [theme.breakpoints.down("sm")] : {
            fontSize : "5rem !important",
        },
    },
    text:{
        fontSize : "1.12rem !important",
        fontFamily : "Barlow !important",
        color: "#D0D6F9",
        lineHeight : "2rem",
        [theme.breakpoints.down("md")] : {
            fontSize : "1rem !important",
        },
        [theme.breakpoints.down("sm")] : {
            fontSize : "0.9rem !important",
        },
    },
    exploreContainer: {
        width: 274,
        height: 274,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize : "2rem",
        [theme.breakpoints.down("md")] : {
            width: 242,
            height: 242,
            fontSize : "1rem"
        },
        [theme.breakpoints.down("sm")] : {
            width: 150,
            height: 150,
        },
    },
    explore : {
        fontSize : "3.5rem !important",
        fontFamily : "Bellefair !important",
        [theme.breakpoints.down("md")] : {
            fontSize : "3rem !important"
        },
        [theme.breakpoints.down("sm")] : {
            fontSize : "2rem !important"
        },
    },
}));

function Technology() {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Navbar />
            <Box className={classes.main}>
                <Box className={classes.content}>
                    <Typography className={classes.subtitle}>
                        SO, YOU WANT TO TRAVEL TO
                    </Typography>
                    <Typography  className={classes.title}>SPACE</Typography>
                    <Typography  className={classes.text}>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </Typography>
                </Box>
                <Box className={classes.exploreContainer}>
                    <Typography className={classes.explore}>EXPLORE</Typography>
                </Box>
            </Box>
        </Box>
	)
}

export default Technology
