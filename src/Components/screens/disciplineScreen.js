import React from 'react';
import { Typography } from '@material-ui/core';

const DisciplineScreen = (props) => {
    return (
        <div>
            <Typography variant="display1" color="inherit">
                {props.titulo}
            </Typography>
            <Typography color="inherit" style={{ marginTop: '20px' }}>
                {props.descricao}
            </Typography>
        </div>
    );
};

export default DisciplineScreen;
