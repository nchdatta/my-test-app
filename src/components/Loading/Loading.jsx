import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = ({ size = 70, minHeight = '50vh' }) => {
    return (
        <Box sx={{ minHeight: minHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size={size} />
        </Box>
    );
}

export default Loading;