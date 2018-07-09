import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Areas } from '../../Store/areas';

const Footer = (props) => {
    const valor =
        props.area !== ''
            ? Areas.findIndex((grupo) => {
                return grupo.id === props.area;
            })
            : 0;
    return (
        <Paper>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                value={valor}
                onChange={(event, index) => {
                    return props.handleChange(index === 0 ? '' : Areas[index].id);
                }}
                centered>
                {Areas.map((area) => {
                    return <Tab key={area.id} label={area.nome} />;
                })}
            </Tabs>
        </Paper>
    );
};

export default Footer;
