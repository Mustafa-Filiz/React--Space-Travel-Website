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

}));

function Technology() {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Navbar />

        </Box>
	)
}

export default Technology
