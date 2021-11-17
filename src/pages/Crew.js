import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Navbar from '../components/Navbar';
import bgImg from '../images/crew/background-crew-desktop.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        paddingTop: 40,
    },

}));

function Crew() {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Navbar />

        </Box>
	)
}

export default Crew
