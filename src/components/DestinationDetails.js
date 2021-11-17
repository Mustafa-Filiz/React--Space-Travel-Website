import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/data.json';

function DestinationDetails() {
    const { name } = useParams();
    const { destinations } = data;
    console.log(name, destinations);
    return (
        <Box>
            <h2 style={{ color: 'red' }}>Destination Details: {name}</h2>
        </Box>
    );
}

export default DestinationDetails;
