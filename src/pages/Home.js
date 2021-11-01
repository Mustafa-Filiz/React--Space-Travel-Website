import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Navbar from '../components/Navbar';
import bgImg from '../images/background-home-desktop.jpg';

const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        paddingTop: 40,
    },
    main: {
		border: "2px solid red",
        width: '90%',
        height: '80vh',
		margin: "auto",
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
    },
    content: {
        width: '30%',
    },
    explore: {
		width: 274,
		height: 274,
		color: "black",
		backgroundColor : "white",
		borderRadius: "50%",
		display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
	},
});

function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Navbar />
            <Box className={classes.main}>
                <Box className={classes.content}>
                    <Typography variant="h5">SO, YOU WANT TO TRAVEL TO</Typography>
                    <Typography variant="h1">SPACE</Typography>
                    <Typography variant="p">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </Typography>
                </Box>
                <Box className={classes.explore}>
                    <Typography variant="h2">EXPLORE</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
