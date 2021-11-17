import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink, useRouteMatch, Route, Switch } from 'react-router-dom';
import DestinationDetails from '../components/DestinationDetails';
import Navbar from '../components/Navbar';
import bgImg from '../images/destination/background-destination-desktop.jpg';
import data from '../utils/data.json';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        paddingTop: 40,
    },
    title: {
        width: '75%',
        margin: '4.5rem auto !important',
        color: 'white',
        fontSize: '1.75rem !important',
        textAlign: 'left',
    },
    subnavbar: {
        display: 'flex',
    },
}));

function Destination() {
    const classes = useStyles();
    const { path, url } = useRouteMatch();

    return (
        <Box className={classes.container}>
            <Navbar />
            <Box>
                <Typography className={classes.title}>
                    01 PICK YOUR DESTINATION
                </Typography>
            </Box>

            <Box>
                <Box className={classes.subnavbar}>
                    {data.destinations.map(({name}, index) => (
                        <NavLink to={`${url}/${name}`} key={index}>
                            <Typography>
                                {name.toUpperCase()}
                            </Typography>
                        </NavLink>
                    ))}
                </Box>

                <Switch>
                    <Route path={`${path}/:name`} component={DestinationDetails} />
                </Switch>
            </Box>
        </Box>
    );
}

export default Destination;
