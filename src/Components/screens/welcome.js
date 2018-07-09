import React from 'react';
import { Typography } from '@material-ui/core';

const Welcome = () => {
    return (
        <div>
            <Typography variant="display1" color="inherit">
                Bem vindo.
            </Typography>
            <Typography color="inherit" style={{ marginTop: '20px' }}>
                *Description*
            </Typography>
        </div>
    );
};

export default Welcome;
